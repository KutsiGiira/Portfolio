package com.example.UserInfo.Login.Cont;

import com.example.UserInfo.Login.Model.Admin;
import com.example.UserInfo.Login.Repository.AdminR;
import com.example.UserInfo.Login.service.JwtResponse;
import com.example.UserInfo.Login.service.JwtUtil;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Login {

     private AdminR adminRepo;
     private BCryptPasswordEncoder encoder;
     private JwtUtil jwtUtil;

    public Login(AdminR adminRepo, BCryptPasswordEncoder encoder, JwtUtil jwtUtil) {
        this.adminRepo = adminRepo;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/user")
    public Admin RegisterUser(@RequestBody Admin admin){
        admin.setPassword(encoder.encode(admin.getPassword()));
        return adminRepo.save(admin);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Admin admin){
        Admin adminCreds = adminRepo.findByUsername(admin.getUsername());
        if(adminCreds == null || !encoder.matches(admin.getPassword(), adminCreds.getPassword())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid User");
        }

        String token = jwtUtil.TokenGen(admin.getUsername());
        return ResponseEntity.ok(new JwtResponse(token));
    }
}
