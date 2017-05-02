package com.grsu.controller;

import com.grsu.entity.News;
import com.grsu.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.stream.Collectors;

/**
 * Created by DENIS on 01.05.2017.
 */
@RestController
@RequestMapping("news")
public class NewsController {

    private NewsRepository newsRepository;

    @Autowired
    public NewsController(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity save(@RequestBody News news) {

        news.setCreateDate(Date.valueOf(LocalDate.now()));
        return ResponseEntity.ok(newsRepository.save(news));
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getAll() {
        return ResponseEntity.ok(newsRepository.findAll());
    }

    @RequestMapping(value = "/institution={id}")
    public ResponseEntity getNewsByInstitution(@PathVariable Long id) {
        return ResponseEntity.ok(newsRepository.findAll().stream().filter(item -> item.getEducationInstitution() != null && item.getEducationInstitution().getId() == id)
                .collect(Collectors.toList()));
    }
}
