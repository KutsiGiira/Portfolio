package com.example.Locked_To_Do_List.Service;

import com.example.Locked_To_Do_List.Model.UserInfo;
import com.example.Locked_To_Do_List.Model.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
        //service to fetch users made after u make entity and repo sahl kat implemetanti interface sff
public class LogService implements UserDetailsService {
    @Autowired
    private UserRepo user;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserInfo userlogged = user.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username not found"));

        return new CustomUserDetails(userlogged);
    }
}
