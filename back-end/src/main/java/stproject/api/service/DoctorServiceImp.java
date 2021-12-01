package stproject.api.service;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import stproject.api.entities.Doctor;
import stproject.api.repositories.DoctorRepository;

@Service
public class DoctorServiceImp implements DoctorService {
	
	@Autowired
	BCryptPasswordEncoder encoder;
	@Autowired
	DoctorRepository doctorRepository;

	@Override
	public void saveDoctor(Doctor doctor) {
		doctor.setPassword(encoder.encode(doctor.getPassword()));
		doctor.setStatus("VERIFIED");
		doctorRepository.save(doctor);
	}

	@Override
	public boolean isDoctorAlreadyPresent(Doctor doctor) {
		// TODO
		return false;
	}

}
