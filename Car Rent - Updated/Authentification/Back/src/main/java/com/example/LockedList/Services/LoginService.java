package com.example.LockedList.Services;

import com.example.LockedList.Entity.DTO.LoginInfo;
import com.example.LockedList.Entity.UserRepo;
import com.example.LockedList.Entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//ach khas ikun f had service
    //1- verification
    //2- jwt generation w itsaft l db
@Service
public class LoginService {
    public LoginInfo loginInfo;
        @Autowired
        public UserRepo users;

    public Users Verify(String username) { //function b parametre username 7it atcheki wach username f db wla la b3da huwa lowl
        return
                users.findByUsername(username).orElseThrow(() -> new RuntimeException("user not found"));
    }
}