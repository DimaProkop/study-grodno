package com.grsu.service;

import com.grsu.entity.*;
import com.grsu.repository.SpecialityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import javax.persistence.metamodel.EntityType;
import javax.persistence.metamodel.Metamodel;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created by DENIS on 28.04.2017.
 */
@Service
public class SearchServiceImpl implements SearchService {

    private SpecialityRepository specialityRepository;
    private EntityManager entityManager;

    @Autowired
    public SearchServiceImpl(SpecialityRepository specialityRepository, EntityManager entityManager) {
        this.specialityRepository = specialityRepository;
        this.entityManager = entityManager;
    }

    @Override
    public List<Speciality> findSpecialityByParams(String direction, String level, String form, Integer duration) {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Speciality> query = cb.createQuery(Speciality.class);

        Root<Speciality> root = query.from(Speciality.class);

        query.select(root);
        query.distinct(true);

        List<Predicate> predicates = new ArrayList<>();

        if(StringUtils.hasText(direction) && !direction.equals("null")) {
            Join<Speciality, SpecialityDirectionLink> joinDirection = root.join("directions");
            predicates.add(cb.equal(joinDirection.get("name"), direction));
        }

        if(StringUtils.hasText(form) && !form.equals("null")){
            Join<Speciality, SpecialityFormLink> joinForm = root.join("formsOfEducation");
            predicates.add(cb.equal(joinForm.get("name"), form));
        }

        if(StringUtils.hasText(level) && !level.equals("null")){
            Join<Speciality, SpecialityLevelLink> joinLevel = root.join("levelsOfEducation");
            predicates.add(cb.equal(joinLevel.get("name"), level));
        }

        if(duration != null){
            predicates.add(cb.equal(root.get("duration"), duration));
        }

        if(!predicates.isEmpty()) {
            Predicate[] predicatesArray = predicates.toArray(new Predicate[predicates.size()]);
            query.where(cb.and(predicatesArray));
        }

        TypedQuery<Speciality> tq = entityManager.createQuery(query);

        return tq.getResultList();
    }
}
