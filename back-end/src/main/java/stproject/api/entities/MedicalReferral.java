package stproject.api.entities;

import javax.persistence.*;

@Entity
@Table(name = "medical_referral")

public class MedicalReferral {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "comment")
    private String comment;

    @Column(name = "date")
    private String date;

    @Column(name = "unique_referral_number")
    private String uniquePrescriptionNumber;

    @ManyToOne
    @JoinColumn(name="doctors_specialists_id")
    private DoctorsSpecialists doctorSpecialist;

    @ManyToOne
    @JoinColumn(name="doctor_id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name="patient_id")
    private Patient patient;

    public MedicalReferral() {
    }

    public MedicalReferral(Long id, String comment, String date, String uniquePrescriptionNumber, DoctorsSpecialists doctorSpecialist, Doctor doctor, Patient patient) {
        this.id = id;
        this.comment = comment;
        this.date = date;
        this.uniquePrescriptionNumber = uniquePrescriptionNumber;
        this.doctorSpecialist = doctorSpecialist;
        this.doctor = doctor;
        this.patient = patient;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public DoctorsSpecialists getDoctorSpecialist() {
        return doctorSpecialist;
    }

    public void setDoctorSpecialist(DoctorsSpecialists doctorSpecialist) {
        this.doctorSpecialist = doctorSpecialist;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}
