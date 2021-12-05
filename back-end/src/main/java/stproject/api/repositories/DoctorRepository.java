package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import stproject.api.entities.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    Doctor findByUsername(String username);
}
