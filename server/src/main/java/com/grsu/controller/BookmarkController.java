package com.grsu.controller;

import com.grsu.dto.BookmarkDTO;
import com.grsu.entity.*;
import com.grsu.repository.BookmarkRepository;
import com.grsu.repository.ChoiceRepository;
import com.grsu.repository.EducationInstitutionRepository;
import com.grsu.repository.SpecialityRepository;
import com.grsu.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Dima Prokopovich 30.04.2017.
 */
@RestController
@RequestMapping("/bookmark")
public class BookmarkController {

    private ChoiceRepository choiceRepository;
    private BookmarkRepository bookmarkRepository;
    private SpecialityRepository specialityRepository;
    private EducationInstitutionRepository universityRepository;

    @Autowired
    public BookmarkController(ChoiceRepository choiceRepository, BookmarkRepository bookmarkRepository, SpecialityRepository specialityRepository, EducationInstitutionRepository universityRepository) {
        this.choiceRepository = choiceRepository;
        this.bookmarkRepository = bookmarkRepository;
        this.specialityRepository = specialityRepository;
        this.universityRepository = universityRepository;
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getBookmarks")
    public ResponseEntity getBookmarks() {
        User user = SecurityUtils.getCurrentUser();
        List<Bookmark> bookmarks = bookmarkRepository.findAll();
        bookmarks = bookmarks.stream()
                .filter(b -> b.getUser() != null && b.getUser().getId().equals(user.getId()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(bookmarks);
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

    @RequestMapping(method = RequestMethod.POST, value = "/delete")
    public ResponseEntity delete(@RequestBody BookmarkDTO dto) {
        Bookmark bookmark = bookmarkRepository.findOneByContentIdAndUser(dto.getContentId().longValue(), SecurityUtils.getCurrentUser());
        bookmarkRepository.delete(bookmark);
        return ResponseEntity.ok(bookmark);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/getByChoice")
    public ResponseEntity getByChoice(@RequestBody Long id) {
        Choice choice = choiceRepository.findOne(id);
        List<Bookmark> bookmarks = bookmarkRepository.findAllByChoice(choice);
        ResponseEntity entity = null;
        if(id == 1) {
            List<Speciality> specialities = new ArrayList<>();
            for (int i = 0; i < bookmarks.size(); i++) {
                for (int j = 0; j < specialityRepository.findAll().size(); j++) {
                    if (bookmarks.get(i).getContentId().equals(specialityRepository.findAll().get(j).getId())) {
                        specialities.add(specialityRepository.findAll().get(j));
                    }
                }
            }
            entity = ResponseEntity.ok(specialities.isEmpty() ? null : specialities);
        }else if(id == 2) {
            List<EducationInstitution> institutions = new ArrayList<>();
            for (int i = 0; i < bookmarks.size(); i++) {
                for (int j = 0; j < universityRepository.findAll().size(); j++) {
                    if (bookmarks.get(i).getContentId().equals(universityRepository.findAll().get(j).getId())) {
                        institutions.add(universityRepository.findAll().get(j));
                    }
                }
            }
            entity = ResponseEntity.ok(institutions.isEmpty() ? null : institutions);
        }
        return entity;
    }

}
