package com.grsu.controller;

import com.grsu.dto.BookmarkDTO;
import com.grsu.entity.Bookmark;
import com.grsu.entity.Choice;
import com.grsu.repository.BookmarkRepository;
import com.grsu.repository.ChoiceRepository;
import com.grsu.repository.UniversityRepository;
import com.grsu.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

/**
 * Dima Prokopovich 30.04.2017.
 */
@RestController
@RequestMapping("/bookmark")
public class BookmarkController {

    private ChoiceRepository choiceRepository;
    private BookmarkRepository bookmarkRepository;
    private SpecialityController specialityController;
    private UniversityRepository universityRepository;

    @Autowired
    public BookmarkController(ChoiceRepository choiceRepository, BookmarkRepository bookmarkRepository, SpecialityController specialityController, UniversityRepository universityRepository) {
        this.choiceRepository = choiceRepository;
        this.bookmarkRepository = bookmarkRepository;
        this.specialityController = specialityController;
        this.universityRepository = universityRepository;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public ResponseEntity add(@RequestBody BookmarkDTO dto) {
        Choice choice = choiceRepository.findOne(dto.getChoiceId().longValue());
        Bookmark bookmark = new Bookmark();
        bookmark.setChoice(choice);
        bookmark.setContentId(dto.getContentId().longValue());
        bookmark.setUser(SecurityUtils.getCurrentUser());
        bookmarkRepository.save(bookmark);
        return ResponseEntity.ok(bookmark);
    }

}
