package stproject.api.controllers;

import stproject.api.entities.Doctor;
import stproject.api.services.DoctorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping("/registration")
    public String registerUserAccount(Doctor registrationData) {
		doctorService.save(registrationData);
		return "redirect:/registration?success";
	}

    @GetMapping
	public String showRegistrationForm() {
		return "registration";
	}

    @GetMapping("/login")
	public String login() {
		return "login";
	}

    @GetMapping("/")
	public String home() {
		return "index";
	}
}
