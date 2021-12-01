package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stproject.api.entities.MedicalReferral;

public interface MedicalReferralRepository extends JpaRepository<MedicalReferral,Long> {

    @Query("SELECT m FROM MedicalReferral m WHERE (m.id)= :id")
    MedicalReferral findMedicalReferralBy(Long id);
}