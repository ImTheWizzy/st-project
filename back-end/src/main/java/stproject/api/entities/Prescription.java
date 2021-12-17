package stproject.api.entities;

import antlr.StringUtils;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "prescription")
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "medicine")
    private String medicine;

    @Column(name = "comment")
    private String comment;

    @Column(name = "date")
    private String date;

    @Column(name = "unique_prescription_number")
    private String uniquePrescriptionNumber;

    @ManyToOne
    @JoinColumn(name="doctor_id")
    private Doctor doctor;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    public Prescription(){

    }

    public Prescription(Long id, String medicine, String comment, String date, String uniquePrescriptionNumber, Doctor doctor, String firstName, String lastName) {
        this.id = id;
        this.medicine = medicine;
        this.comment = comment;
        this.date = date;
        this.uniquePrescriptionNumber = uniquePrescriptionNumber;
        this.doctor = doctor;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMedicine() {
        return medicine;
    }

    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUniquePrescriptionNumber() {
        return uniquePrescriptionNumber;
    }

    public void setUniquePrescriptionNumber(String uniquePrescriptionNumber) {
        this.uniquePrescriptionNumber = uniquePrescriptionNumber;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
