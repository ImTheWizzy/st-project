package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stproject.api.entities.Prescription;

import java.util.List;

public interface PrescriptionRepository extends JpaRepository<Prescription,Long> {
    @Query("SELECT p FROM Prescription WHERE p.patient_id = :patient_id")
    List<Prescription> findPrescriptionsByPatientId(Integer patient_id);
}
