package stproject.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import stproject.api.entities.Doctor;
import stproject.api.repositories.DoctorRepository;

public class DoctorServiceImpl implements DoctorService{

    @Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Override
	public Doctor save(Doctor registrationData) {
		Doctor doctor = new Doctor(registrationData.getId(), registrationData.getFirstName(), 
        registrationData.getLastName(), registrationData.getUsername(),
				passwordEncoder.encode(registrationData.getPassword()), "4");
		
		return doctorRepository.save(doctor);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	
		Doctor doctor = doctorRepository.findByUsername(username);
		if(doctor == null) {
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		return new org.springframework.security.core.userdetails.User(doctor.getUsername(), doctor.getPassword(), null);		
	}	
}
