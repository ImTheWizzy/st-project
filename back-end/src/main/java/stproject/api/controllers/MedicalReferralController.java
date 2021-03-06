package stproject.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import stproject.api.entities.MedicalReferral;
import stproject.api.repositories.DoctorRepository;
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
    @Autowired
    DoctorRepository doctorRepository;

    @PostMapping("/save")
    public ResponseEntity<?> saveOrUpdate(@RequestParam(required = false) Long id,
                                          @RequestParam(required = false) String firstName,
                                          @RequestParam(required = false) String lastName,
                                          @RequestParam(required = false) String egn,
                                          @RequestParam(required = false) String doctorType,
                                          @RequestParam(required = false) String comment,
                                          @RequestParam(required = false) String date,
                                          @RequestParam(required = false) String uniqueReferralNumber,
                                          String doctorUser,
                                          MedicalReferral medicalReferral) {

        if (firstName != null) {
            medicalReferral.setFirstName(firstName);
        }
        if (lastName != null) {
            medicalReferral.setLastName(lastName);
        }
        if (egn != null) {
            medicalReferral.setEgn(egn);
        }
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
        if (doctorUser != null) {
            medicalReferral.setDoctor(doctorRepository.findByUsername(doctorUser));
        }
        
        medicalReferral = medicalReferralRepository.save(medicalReferral);

        Map<String, Object> response = new HashMap<>();
        response.put("medicalReferralId", medicalReferral.getId());
        response.put("message", "?????????????? ??????????????!");
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteMedicalReferral(@RequestParam Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("???? ?????? ???????????? ID!");
        }

        medicalReferralRepository.deleteById(id);
        return ResponseEntity.ok("???????????? ??????????????!");
    }
}
