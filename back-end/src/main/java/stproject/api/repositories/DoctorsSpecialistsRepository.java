package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stproject.api.entities.DoctorsSpecialists;

public interface DoctorsSpecialistsRepository extends JpaRepository<DoctorsSpecialists, Long> {
    @Query("SELECT d FROM DoctorsSpecialists d WHERE lower (d.doctorType) = :doctorType")
    DoctorsSpecialists findDoctorsSpecialistsByDoctorType(String doctorType);
}