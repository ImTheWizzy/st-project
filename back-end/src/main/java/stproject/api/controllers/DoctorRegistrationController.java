package stproject.api.controllers;

import stproject.api.entities.Doctor;
import stproject.api.services.DoctorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registration")
public class DoctorRegistrationController {

	@Autowired
    private DoctorService doctorService;

    @PostMapping
    public String registerUserAccount(Doctor registrationData) {
		doctorService.save(registrationData);
		return "redirect:/registration?success";
	}

    @GetMapping
	public String showRegistrationForm() {
		return "registration";
	}
}
