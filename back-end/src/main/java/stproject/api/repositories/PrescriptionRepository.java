package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stproject.api.entities.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription,Long> {

    @Query("SELECT p FROM Prescription p WHERE (p.id)= :id")
    Prescription findPrescriptionById(Long id);
}
