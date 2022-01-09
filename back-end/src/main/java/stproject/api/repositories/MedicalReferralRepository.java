package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stproject.api.entities.MedicalReferral;

import java.util.List;

public interface MedicalReferralRepository extends JpaRepository<MedicalReferral,Long> {
    @Query("SELECT m FROM MedicalReferral WHERE m.patient_id = :patient_id")
    List<MedicalReferral> findMedicalReferralsByPatientId(Integer patient_id);
}