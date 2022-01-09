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
    private String uniqueReferralNumber;

    @ManyToOne
    @JoinColumn(name="doctors_specialists_id")
    private DoctorsSpecialists doctorSpecialist;

    @ManyToOne
    @JoinColumn(name="doctor_id")
    private Doctor doctor;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "egn")
    private String egn;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    public MedicalReferral() {
    }

    public MedicalReferral(Long id, String comment, String date, String uniqueReferralNumber, DoctorsSpecialists doctorSpecialist, Doctor doctor, String firstName, String lastName, String egn, Patient patient) {
        this.id = id;
        this.comment = comment;
        this.date = date;
        this.uniqueReferralNumber = uniqueReferralNumber;
        this.doctorSpecialist = doctorSpecialist;
        this.doctor = doctor;
        this.firstName = firstName;
        this.lastName = lastName;
        this.egn = egn;
        this.patient = patient;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
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

    public String getUniqueReferralNumber() {
        return uniqueReferralNumber;
    }

    public void setUniqueReferralNumber(String uniqueReferralNumber) {
        this.uniqueReferralNumber = uniqueReferralNumber;
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

    public String getEgn() {
        return egn;
    }

    public void setEgn(String egn) {
        this.egn = egn;
    }
}
