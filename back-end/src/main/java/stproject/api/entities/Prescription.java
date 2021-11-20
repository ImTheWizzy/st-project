package stproject.api.entities;

import antlr.StringUtils;
import org.springframework.data.annotation.Id;

import javax.persistence.*;

@Entity
@Table(name = "prescription")
public class Prescription {

    @javax.persistence.Id
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

    @Column(name = "doctor_id")
    private int doctorId;

    @Column(name = "patient_id")
    private int patientId;

    public Prescription(){

    }

    public Prescription(Long id, String medicine, String comment, String date, String uniquePrescriptionNumber, int doctorId, int patientId) {
        this.id = id;
        this.medicine = medicine;
        this.comment = comment;
        this.date = date;
        this.uniquePrescriptionNumber = uniquePrescriptionNumber;
        this.doctorId = doctorId;
        this.patientId = patientId;
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

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }
}
