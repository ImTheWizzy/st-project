package stproject.api.entities;

import javax.persistence.*;

@Entity
@Table(name = "doctors_specialists")

public class DoctorsSpecialists {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "doctor_type")
    private String doctorType;

    public DoctorsSpecialists() {
    }

    public DoctorsSpecialists(Long id, String doctorType) {
        this.id = id;
        this.doctorType = doctorType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDoctorType() {
        return doctorType;
    }

    public void setDoctorType(String doctorType) {
        this.doctorType = doctorType;
    }
}
