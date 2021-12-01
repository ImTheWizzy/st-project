package stproject.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import stproject.api.model.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

}
