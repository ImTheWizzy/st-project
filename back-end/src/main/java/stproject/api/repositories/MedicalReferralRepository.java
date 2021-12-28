package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import stproject.api.entities.MedicalReferral;

public interface MedicalReferralRepository extends JpaRepository<MedicalReferral,Long> {

}