package stproject.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stproject.api.entities.Patient;
import stproject.api.repositories.PatientRepository;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("patient")
public class PatientController {

    @Autowired
    PatientRepository patientRepository;

    @GetMapping("/all")
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

   @GetMapping("/search/firstName")
    public ResponseEntity<?> getPatientByFirstName(@RequestParam(required = false) String firstName){
        if(firstName == null || firstName.isBlank())
            return ResponseEntity.ok("Не сте въвели име!");

        Optional<Patient> resultFirstName = patientRepository.findPatientByFirstName(firstName.toLowerCase());
        return resultFirstName.isPresent()?ResponseEntity.ok(resultFirstName.get()) : ResponseEntity.ok("Няма намерен човек с това име!");

    }




}
