package stproject.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;

import stproject.api.model.Doctor;
import stproject.api.service.DoctorService;

@Controller
public class AuthenticationController {

	@Autowired
	DoctorService doctorService;

	@RequestMapping(value = { "/login" }, method = RequestMethod.GET)
	public ModelAndView login() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("login"); // resources/template/login.html
		return modelAndView;
	}

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView register() {
		ModelAndView modelAndView = new ModelAndView();
		Doctor doctor = new Doctor();
		modelAndView.addObject("doctor", doctor); 
		modelAndView.setViewName("register"); // resources/template/register.html
		return modelAndView;
	}
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public ModelAndView home() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("home"); // resources/template/home.html
		return modelAndView;
	}

	@RequestMapping(value="/register", method=RequestMethod.POST)
	public ModelAndView registerUser(@Valid Doctor doctor, BindingResult bindingResult, ModelMap modelMap) {
		ModelAndView modelAndView = new ModelAndView();
		// Check for the validations
		if(bindingResult.hasErrors()) {
			modelAndView.addObject("successMessage", "Please correct the errors in form!");
			modelMap.addAttribute("bindingResult", bindingResult);
		}
		else if(doctorService.isUserAlreadyPresent(doctor)){
			modelAndView.addObject("successMessage", "user already exists!");			
		}
		// we will save the user if, no binding errors
		else {
			doctorService.saveDoctor(doctor);
			modelAndView.addObject("successMessage", "User is registered successfully!");
		}
		modelAndView.addObject("user", new Doctor());
		modelAndView.setViewName("register");
		return modelAndView;
	}
}
