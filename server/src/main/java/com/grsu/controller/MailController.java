package com.grsu.controller;

import com.grsu.dto.MessageDTO;
import com.grsu.entity.Message;
import com.grsu.entity.User;
import com.grsu.repository.MessageRepository;
import com.grsu.repository.UserRepository;
import com.grsu.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Dima Prokopovich 02.05.2017.
 */
@RestController
@RequestMapping("mail")
public class MailController {

    private MessageRepository messageRepository;
    private UserRepository userRepository;

    @Autowired
    public MailController(MessageRepository messageRepository, UserRepository userRepository) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/getMessages={flag}", method = RequestMethod.PUT)
    public ResponseEntity getMessages(@PathVariable boolean flag) {
        List<Message> messages = messageRepository.findAll();
        if (flag) {
            messages = messages.stream()
                    .filter(m -> m.getToId().equals(SecurityUtils.getCurrentUserLogin())
                            && m.getStatus().equals("incoming"))
                    .collect(Collectors.toList());
        } else {
            messages = messages.stream()
                    .filter(m -> m.getFromId().equals(SecurityUtils.getCurrentUserLogin())
                            && m.getStatus().equals("sending"))
                    .collect(Collectors.toList());
        }
        return ResponseEntity.ok(messages);
    }

    @RequestMapping(value = "/{id}")
    public ResponseEntity getById(@PathVariable Long id) {
        return ResponseEntity.ok(messageRepository.findOne(id));
    }

    @RequestMapping(value = "/getIncs", method = RequestMethod.GET)
    public ResponseEntity getIncs() {
        List<Message> messages = messageRepository.findAll().stream()
                .filter(m -> m.getStatus().equals("incoming")
                        && m.getToId().equals(SecurityUtils.getCurrentUserLogin())).collect(Collectors.toList());
        return ResponseEntity.ok(messages.size());
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public ResponseEntity addMessage(@RequestBody MessageDTO dto) {
        LocalDate date = LocalDate.now();
        Message message = new Message();
        //set in incoming message
        message.setToId(userRepository.findOneUserByLogin(dto.getToId()).getLogin());
        message.setFromId(SecurityUtils.getCurrentUserLogin());
        message.setDate(date.toString());
        message.setHeader(dto.getHeader());
        message.setText(dto.getText());
        message.setStatus("incoming");
        messageRepository.save(message);

        //set in sending message
        Message newMessage = new Message();
        newMessage.setDate(date.toString());
        newMessage.setHeader(dto.getHeader());
        newMessage.setText(dto.getText());
        newMessage.setToId(userRepository.findOneUserByLogin(dto.getToId()).getLogin());
        newMessage.setFromId(SecurityUtils.getCurrentUserLogin());
        newMessage.setStatus("sending");
        messageRepository.save(newMessage);
        return ResponseEntity.ok(message);
    }
}
