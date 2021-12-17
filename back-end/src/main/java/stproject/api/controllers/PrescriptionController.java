package stproject.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stproject.api.entities.Prescription;
import stproject.api.repositories.PrescriptionRepository;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("prescription")

public class PrescriptionController {

    @Autowired
    PrescriptionRepository prescriptionRepository;

    @PostMapping("/save")
    public ResponseEntity<?> saveOrUpdate(@RequestParam(required = false) Long id,
                                          @RequestParam(required = false) String firstName,
                                          @RequestParam(required = false) String lastName,
                                          @RequestParam(required = false) String medicine,
                                          @RequestParam(required = false) String comment,
                                          @RequestParam(required = false) String date,
                                          @RequestParam(required = false) String uniquePrescriptionNumber,
                                          Prescription prescription) {

//        Prescription prescription =prescriptionRepository.findPrescriptionById(id);
        if (firstName != null) {
            prescription.setFirstName(firstName);
        }
        if (lastName != null) {
            prescription.setLastName(lastName);
        }
        if (medicine != null) {
            prescription.setMedicine(medicine);
        }
        if (comment != null) {
            prescription.setComment(comment);
        }
        if (date != null) {
            prescription.setDate(date);
        }
        if (uniquePrescriptionNumber != null) {
            prescription.setUniquePrescriptionNumber(uniquePrescriptionNumber);
        }

        prescription = prescriptionRepository.save(prescription);

        Map<String, Object> response = new HashMap<>();
        response.put("prescriptionId", prescription.getId());
        response.put("message", "Успешно записан!");
        return new ResponseEntity<>(response, HttpStatus.OK);


    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deletePrescription(@RequestParam Long id) {
        if (id == null) {
            return ResponseEntity.badRequest().body("Не сте подали ID!");
        }

        prescriptionRepository.deleteById(id);
        return ResponseEntity.ok("Изтрит успешно!");
    }
}
