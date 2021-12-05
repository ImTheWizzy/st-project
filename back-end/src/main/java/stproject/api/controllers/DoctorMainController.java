package stproject.api.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DoctorMainController {

    @GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("/")
	public String home() {
		return "index";
	}
}
