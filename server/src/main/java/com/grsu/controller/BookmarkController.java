package com.grsu.controller;

import com.grsu.repository.BookmarkRepository;
import com.grsu.repository.ChoiceRepository;
import com.grsu.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
