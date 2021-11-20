package stproject.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import stproject.api.entities.Patient;
import stproject.api.repositories.PatientRepository;

import java.util.List;
import java.util.Optional;

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
