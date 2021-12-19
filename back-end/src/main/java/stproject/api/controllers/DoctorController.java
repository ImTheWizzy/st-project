package stproject.api.controllers;

import stproject.api.entities.Doctor;
import stproject.api.repositories.DoctorRepository;

import java.util.HashMap;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
	private BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password){
        HashMap<String, Object> response = new HashMap<>();
        Doctor doctor = doctorRepository.findByUsername(username);
        if (doctor != null && passwordEncoder.matches(password, doctor.getPassword())){
            response.put("message","Влязохте успрешно!");
            response.put("doctor", doctor.getFirstName() + " " + doctor.getLastName());
            UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
            SecurityContext securityContext = SecurityContextHolder.getContext();
            securityContext.setAuthentication(authRequest);
            ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            attr.getRequest().getSession(true).setAttribute("SPRING_SECURITY_CONTEXT", username);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.put("message","Грешно потребителско име или парола!");
        }
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/logout")
    public ResponseEntity<?> logout(){
        HashMap<String, Object> response = new HashMap<>();
        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken("anonymousUser", null);
        SecurityContextHolder.getContext().setAuthentication(authRequest);
        ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        attr.getRequest().getSession(true).removeAttribute("SPRING_SECURITY_CONTEXT");

        response.put("message","Излязохте от профила си!");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/registration")
    public ResponseEntity<?> registration(@RequestParam String username) {
        Doctor doctorExists = doctorRepository.findByUsername(username);
        HashMap<String, Object> response = new HashMap<>();
        if (doctorExists == null) {
            response.put("message", "Не съществува такъв потребител!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } else {
            response.put("doctorId", doctorExists.getId());
            response.put("doctorFirstName", doctorExists.getFirstName());
            response.put("doctorLastName", doctorExists.getLastName());
            response.put("doctorUsername", doctorExists.getUsername());
            response.put("doctorPassword", doctorExists.getPassword());
            response.put("doctorNumber", doctorExists.getUniqueDoctorNumber());
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/registration")
    public ResponseEntity<?> registerDoctor(@RequestBody Doctor doctor) {
        Doctor doctorExists = doctorRepository.findByUsername(doctor.getUsername());
        HashMap<String, Object> response = new HashMap<>();
        if (doctorExists != null) {
            response.put("message", "Съществува такъв потребител!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } else {
            doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
            doctor.setUniqueDoctorNumber(UUID.randomUUID().toString());
            doctorRepository.save(doctor);
            response.put("message", "Успешна регистрация!");
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<?> home(){
        HashMap<String, Object> response = new HashMap<>();
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authUser = securityContext.getAuthentication();
        if (authUser.getName() == null || authUser.getName().equals("anonymousUser")) {
            response.put("message","Не сте влезли в профила си!");
            response.put("doctor", authUser);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } else {
            response.put("message","Начална страница");
            response.put("doctor", authUser);
        }
        response.put("doctor", authUser);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
