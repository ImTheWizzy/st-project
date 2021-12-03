package stproject.api.services;

import org.springframework.security.core.userdetails.UserDetailsService;

import stproject.api.entities.Doctor;

public interface DoctorService extends UserDetailsService {

	Doctor save(Doctor registrationData);
}
