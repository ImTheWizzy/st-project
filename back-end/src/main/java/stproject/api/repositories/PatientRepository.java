package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stproject.api.entities.Patient;

import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient,Long> {

    @Query("SELECT p FROM Patient p WHERE lower(p.firstName)= :firstName")
    Optional<Patient> findPatientByFirstName(String firstName);
}
