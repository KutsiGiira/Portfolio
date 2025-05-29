package com.example.LockedList.Controller;

import com.example.LockedList.Entity.DTO.LoginInfo;
import com.example.LockedList.Entity.DTO.RegisterInfo;
import com.example.LockedList.Entity.UserRepo;
import com.example.LockedList.Entity.Users;
import com.example.LockedList.Jwt.JwtUtil;
import com.example.LockedList.Services.LoginService;
import com.example.LockedList.Services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
public class Home {
    private final LoginService loginService;
    private final RegisterService register;
    private final JwtUtil jwtUtil;
    private final UserRepo userRepo;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public Home(LoginService loginService, RegisterService register, JwtUtil jwtUtil, UserRepo userRepo) {
        this.loginService = loginService;
        this.register = register;
        this.jwtUtil = jwtUtil;
        this.userRepo = userRepo;
    }

    @GetMapping("/")
    public ResponseEntity<String> Home(){
        try{
            return ResponseEntity.ok("Hello");
        }
    catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("KHRITI");
        }
    }
    @PostMapping("/register")
    public ResponseEntity<String> Regi(@RequestBody RegisterInfo Rinfo){
        try{
            register.register(Rinfo);
            return ResponseEntity.ok("User Registred");
        }
        catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @PatchMapping("/update/{id}")
    public ResponseEntity<String> password(@PathVariable Long id, @RequestBody Map<String, String> body){
        try {
            Optional<Users> optionalUser = userRepo.findById(id);
            if (optionalUser.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            Users user = optionalUser.get();
            String newPassword = body.get("password");
            if (newPassword == null || newPassword.isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password is required");
            }
             String encodedPassword = encoder.encode(newPassword);
            user.setPassword(encodedPassword);
            userRepo.save(user);
            return ResponseEntity.ok("User password updated");
        }
        catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginInfo Linfo) {
        try {
            Users user = loginService.Verify(Linfo.getUsername());
            if (!encoder.matches(Linfo.getPassword(), user.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }
            String token = jwtUtil.TokenGen(user.getUsername());
            System.out.println(token);
            return ResponseEntity.ok(Linfo.getToken());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}