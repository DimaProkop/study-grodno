package com.grsu.controller;

import com.grsu.dto.CommentDTO;
import com.grsu.entity.Comment;
import com.grsu.repository.CommentRepository;
import com.grsu.repository.SpecialityRepository;
import com.grsu.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by DENIS on 12.03.2017.
 */
@RestController
@RequestMapping("speciality")
public class SpecialityController {

    private SpecialityRepository specialityRepository;
    private CommentRepository commentRepository;

    @Autowired
    public SpecialityController(SpecialityRepository specialityRepository, CommentRepository commentRepository) {
        this.specialityRepository = specialityRepository;
        this.commentRepository = commentRepository;
    }

    @RequestMapping(value = "/{id}")
    public ResponseEntity getById(@PathVariable Long id) {
        return ResponseEntity.ok(specialityRepository.findOne(id));
    }

    @RequestMapping(value = "/getComments", method = RequestMethod.POST)
    public ResponseEntity getComments(@RequestBody Long id) {
        List<Comment> comments = commentRepository.findAll();
        return ResponseEntity.ok(comments);
    }

    @RequestMapping(value = "/addComment", method = RequestMethod.POST)
    public ResponseEntity addComment(@RequestBody CommentDTO dto) {
        Comment comment = new Comment();
        comment.setSpecialityId(dto.getSpecialityId());
        LocalDate date = LocalDate.now();
        comment.setDate(date.toString());
        comment.setText(dto.getText());
        comment.setUsername(SecurityUtils.getCurrentUserLogin());
        commentRepository.save(comment);
        return ResponseEntity.ok(null);
    }

}
