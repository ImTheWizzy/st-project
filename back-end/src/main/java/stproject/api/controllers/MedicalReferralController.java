package stproject.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stproject.api.entities.MedicalReferral;
import stproject.api.repositories.DoctorsSpecialistsRepository;
import stproject.api.repositories.MedicalReferralRepository;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("medicalReferral")

public class MedicalReferralController {

    @Autowired
    MedicalReferralRepository medicalReferralRepository;
    @Autowired
    DoctorsSpecialistsRepository doctorsSpecialistsRepository;

    @PostMapping("/save")
    public ResponseEntity<?> saveOrUpdate(@RequestParam(required = false) Long id,
                                          @RequestParam(required = false) String doctorType,
                                          @RequestParam(required = false) String comment,
                                          @RequestParam(required = false) String date,
                                          @RequestParam(required = false) String uniqueReferralNumber,
                                          MedicalReferral medicalReferral) {

//        MedicalReferral medicalReferral = medicalReferralRepository.findMedicalReferralBy(id);
        System.out.println(doctorType);
        if (doctorType != null) {
            medicalReferral.setDoctorSpecialist(doctorsSpecialistsRepository.findDoctorsSpecialistsByDoctorType(doctorType.toLowerCase()));
        }
        if (comment != null) {
            medicalReferral.setComment(comment);
        }
        if (date != null) {
            medicalReferral.setDate(date);
        }
        if (uniqueReferralNumber != null) {
            medicalReferral.setUniqueReferralNumber(uniqueReferralNumber);
        }

        medicalReferral = medicalReferralRepository.save(medicalReferral);

        Map<String, Object> response = new HashMap<>();
        response.put("medicalReferralId", medicalReferral.getId());
        response.put("message", "Успешно записан!");
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteMedicalReferral(@RequestParam Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Не сте подали ID!");
        }

        medicalReferralRepository.deleteById(id);
        return ResponseEntity.ok("Изтрит успешно!");
    }
}
