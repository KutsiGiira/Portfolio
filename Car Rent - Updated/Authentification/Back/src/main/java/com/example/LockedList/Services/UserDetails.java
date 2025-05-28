package com.example.LockedList.Services;

import com.example.LockedList.Entity.UserRepo;
import com.example.LockedList.Entity.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetails implements UserDetailsService {
    @Autowired
    public UserRepo userRepo;
    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        Optional<Users> user = userRepo.findByUsername(username);
        if(user.isPresent()){
            return new UserPrinciple(user);
        }
        throw new UsernameNotFoundException("User not found");
    }
}
