package com.grsu.repository;

import com.grsu.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by DENIS on 01.05.2017.
 */
public interface NewsRepository extends JpaRepository<News, Long> {
}
