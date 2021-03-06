package com.grsu.service;

import com.grsu.entity.EducationInstitution;
import com.grsu.entity.Faculty;
import com.grsu.entity.Speciality;
import com.grsu.repository.EducationInstitutionRepository;
import com.grsu.repository.FacultyRepository;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by DENIS on 09.04.2017.
 */
@Service
public class EducationInstitutionServiceImpl implements EducationInstitutionService {

    private EducationInstitutionRepository educationInstitutionRepository;
    private FacultyRepository facultyRepository;
    private SpecialityRepository specialityRepository;

    @Autowired
    public EducationInstitutionServiceImpl(EducationInstitutionRepository educationInstitutionRepository,
                                           FacultyRepository facultyRepository,
                                           SpecialityRepository specialityRepository,
                                           EntityManager entityManager) {

        this.educationInstitutionRepository = educationInstitutionRepository;
        this.facultyRepository = facultyRepository;
        this.specialityRepository = specialityRepository;
    }

    @Override
    public void adjustSave(EducationInstitution entity) {
        educationInstitutionRepository.save(entity);

        entity.getFaculties().stream().forEach(faculty -> {

            faculty.setEducationInstitution(entity);

            facultyRepository.save(faculty);

            faculty.getSpecialities().stream().forEach(speciality -> {

                speciality.setFaculty(faculty);

                specialityRepository.save(speciality);
            });
        });
    }

    @Override
    public List<EducationInstitution> getAll() {
        return educationInstitutionRepository.findAll();
    }

    @Override
    public List<EducationInstitution> getInstitutionByDirectionId(Long id) {

        List<EducationInstitution> result = new ArrayList<>();

        educationInstitutionRepository.findAll().stream().forEach(institution -> {

                    if (institution.getFaculties() != null) {

                        institution.getFaculties().stream().forEach(faculty -> {
                            if (faculty.getSpecialities() != null)
                                faculty.getSpecialities().stream().forEach(speciality -> {
                                    if (speciality.getDirections() != null) {
                                        speciality.getDirections().stream().forEach(direction -> {
                                            if (direction.getId() == id) {
                                                result.add(institution);
                                            }
                                        });
                                    }
                                });
                        });
                    }
                }
        );

        return result.stream().distinct().collect(Collectors.toList());
    }

    @Override
    public List<EducationInstitution> getInstitutionByUser(Long userId) {

        return educationInstitutionRepository.findAll().stream().filter(institution ->  institution.getUser() != null && institution.getUser().getId().equals(userId)).collect(Collectors.toList());
    }
}
