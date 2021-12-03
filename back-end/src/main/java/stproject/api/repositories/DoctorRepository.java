package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import stproject.api.entities.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    Doctor findByUsername(String username);
}
