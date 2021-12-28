package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import stproject.api.entities.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription,Long> {

}
