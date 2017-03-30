package com.grsu.repository;

import com.grsu.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by dionp on 27.03.2017.
 */
public interface DepartmentRepository extends JpaRepository<Department, Long>{
}
