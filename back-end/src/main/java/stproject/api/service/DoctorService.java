package stproject.api.service;

import stproject.api.entities.Doctor;

public interface DoctorService {

	public void saveDoctor(Doctor user);
	
	public boolean isUserAlreadyPresent(Doctor user);
}
