package com.example.Locked_To_Do_List.Controller.Register;

import com.example.Locked_To_Do_List.Model.UserRepo;
import com.example.Locked_To_Do_List.Model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class Register {
    @Autowired
    private UserRepo regrepo;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    @PostMapping("/register")
    public UserInfo reg(@RequestBody UserInfo user){
        user.setPassword(encoder.encode(user.getPassword()));
        return regrepo.save(user);
    }
}
