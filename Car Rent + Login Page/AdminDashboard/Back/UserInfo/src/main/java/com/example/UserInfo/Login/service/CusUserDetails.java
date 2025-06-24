package com.example.UserInfo.Login.service;

import com.example.UserInfo.Login.Model.Admin;
import com.example.UserInfo.Login.Repository.AdminR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class CusUserDetails implements UserDetailsService {
    @Autowired
    private AdminR adminRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin admin = adminRepo.findByUsername(username);
        if (admin == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return new User(admin.getUsername(), admin.getPassword(), new ArrayList<>());
    }
}
