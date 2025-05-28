package com.example.LockedList.Services;

import com.example.LockedList.Entity.DTO.RegisterInfo;
import com.example.LockedList.Entity.UserRepo;
import com.example.LockedList.Entity.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
@Autowired
    private  UserRepo userrepo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void register(RegisterInfo info) {
        if (userrepo.findByUsername(info.getUsername()).isPresent()) {
            throw new RuntimeException("User already exists");
        }
        Users user = new Users();
        user.setUsername(info.getUsername());
        user.setPassword(encoder.encode(info.getPassword()));
        System.out.println(user.getUsername() +  user.getPassword());
        userrepo.save(user);
    }
}
