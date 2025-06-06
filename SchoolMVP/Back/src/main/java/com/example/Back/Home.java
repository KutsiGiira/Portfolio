package com.example.Back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Home {
    @Autowired repo admin;
    @GetMapping("/")
    public List<Admin> home(){
        return admin.findAll();
    }
}