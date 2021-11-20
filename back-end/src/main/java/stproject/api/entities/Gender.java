package stproject.api.entities;

import org.springframework.data.annotation.Id;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "gender")

public class Gender {

    @javax.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "gender_type")
    private String genderType;

    @OneToMany(mappedBy = "gender")
    private Set<Patient> patientSet=new HashSet<>();

    public Gender() {

    }

    public Gender(Long id, String genderType, Set<Patient> patientSet) {
        this.id = id;
        this.genderType = genderType;
        this.patientSet = patientSet;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGenderType() {
        return genderType;
    }

    public void setGenderType(String genderType) {
        this.genderType = genderType;
    }
}
