package stproject.api.entities;

import javax.persistence.*;

@Entity
@Table(name = "doctor")
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "unique_doctor_number")
    private String uniqueDoctorNumber;

    public Doctor(){

    }

    public Doctor(String firstName, String lastName, String username, String password, String uniqueDoctorNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.uniqueDoctorNumber = uniqueDoctorNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUniqueDoctorNumber() {
        return uniqueDoctorNumber;
    }

    public void setUniqueDoctorNumber(String uniqueDoctorNumber) {
        this.uniqueDoctorNumber = uniqueDoctorNumber;
    }

}
