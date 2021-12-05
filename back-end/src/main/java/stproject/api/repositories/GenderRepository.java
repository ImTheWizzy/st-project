package stproject.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import stproject.api.entities.Gender;

public interface GenderRepository extends JpaRepository<Gender,Long> {
    @Query("select g FROM Gender g WHERE lower(g.genderType) = :gender")
    Gender findGenderByName(String gender);
}
