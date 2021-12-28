package stproject.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stproject.api.entities.Patient;
import stproject.api.repositories.DoctorRepository;
import stproject.api.repositories.GenderRepository;
import stproject.api.repositories.PatientRepository;

import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("patient")
public class PatientController {

    @Autowired
    PatientRepository patientRepository;
    @Autowired
    GenderRepository genderRepository;
    @Autowired
    DoctorRepository doctorRepository;

    @GetMapping("/all")
    public List<Patient> getAllPatients(String doctorUser) {
        Long doctorId = doctorRepository.findByUsername(doctorUser).getId();
        return patientRepository.getPatientsByDoctor(doctorId);
    }

    @GetMapping("/search/firstName")
    public ResponseEntity<?> getPatientByFirstName(@RequestParam(required = false) String firstName) {
        if (firstName == null || firstName.isBlank())
            return ResponseEntity.ok("Не сте въвели име!");

        Optional<Patient> resultFirstName = patientRepository.findPatientByFirstName(firstName.toLowerCase());
        return resultFirstName.isPresent() ? ResponseEntity.ok(resultFirstName.get()) : ResponseEntity.ok("Няма намерен човек с това име!");

    }

    @GetMapping("/search/egn")
    public ResponseEntity<?> getPatientByEgn(@RequestParam(required = false) String egn) {
        if (egn == null || egn.isBlank())
            return ResponseEntity.ok("Не сте въвели ЕГН!");

        Optional<Patient> resultEgn = patientRepository.findPatientByEgn(egn);
        return resultEgn.isPresent() ? ResponseEntity.ok(resultEgn.get()) : ResponseEntity.ok("Няма намерен човек с това ЕГН!");

    }

    @PostMapping("/save")
    public ResponseEntity<?> saveOrUpdate(@RequestParam(required = false) Long id,
                                          @RequestParam(required = false) String firstName,
                                          @RequestParam(required = false) String lastName,
                                          @RequestParam(required = false) String genderType,
                                          @RequestParam(required = false) String egn,
                                          @RequestParam(required = false) String address,
                                          @RequestParam(required = false) String phone,
                                          @RequestParam(required = false) String birthDate,
                                          @RequestParam(required = false) Integer age,
                                          @RequestParam(required = false) String additionalInfo,
                                          String doctorUser,
                                          Patient patient) {

       // Patient patient = patientRepository.findPatientById(id);
        if (firstName != null) {
            patient.setFirstName(firstName);
        }
        if (lastName != null) {
            patient.setLastName(lastName);
        }
        if (genderType != null) {
            patient.setGender(genderRepository.findGenderByName(genderType.toLowerCase()));
        }
        if (egn != null) {
            patient.setEgn(egn);
        }
        if (address != null) {
            patient.setAddress(address);
        }
        if (phone != null) {
            patient.setPhone(phone);
        }
        if (birthDate != null) {
            patient.setBirthDate(birthDate);
        }
        if (age != null) {
            patient.setAge(age);
        }
        if (additionalInfo != null) {
            patient.setAdditionalInfo(additionalInfo);
        }
        if (doctorUser != null) {
            patient.setDoctor(doctorRepository.findByUsername(doctorUser));
        }

        patient = patientRepository.save(patient);

        Map<String, Object> response = new HashMap<>();
        response.put("patientId", patient.getId());
        response.put("message", "Успешно записан!");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deletePatient(@RequestParam Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Не сте подали ID!");
        }

        patientRepository.deleteById(id);
        return ResponseEntity.ok("Изтрит успешно!");
    }

}