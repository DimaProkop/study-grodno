package com.grsu.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by DENIS on 28.04.2017.
 */
@Entity
@Table(name = "speciality_direction")
public class SpecialityDirectionLink implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne
    @JoinColumn(name = "speciality_id")
    Speciality speciality;

    @ManyToOne
    @JoinColumn(name = "direction_id")
    Direction direction;

    public SpecialityDirectionLink() {
    }

    public Speciality getSpeciality() {
        return speciality;
    }

    public void setSpeciality(Speciality speciality) {
        this.speciality = speciality;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
