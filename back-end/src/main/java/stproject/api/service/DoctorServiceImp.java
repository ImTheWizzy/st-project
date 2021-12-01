package stproject.api.service;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import stproject.api.model.Doctor;
import stproject.api.repository.DoctorRepository;

@Service
public class DoctorServiceImp implements DoctorService {
	
	@Autowired
	BCryptPasswordEncoder encoder;
	@Autowired
	DoctorRepository userRepository;

	@Override
	public void saveDoctor(Doctor doctor) {
		doctor.setPassword(encoder.encode(doctor.getPassword()));
		doctor.setStatus("VERIFIED");
		userRepository.save(doctor);
	}

	@Override
	public boolean isUserAlreadyPresent(Doctor doctor) {
		// TODO
		return false;
	}

}
