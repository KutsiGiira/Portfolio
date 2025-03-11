package com.example.UserInfo.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class Book {
    @GetMapping("/booking")
    public String book(){
    }
    @GetMapping("/coustumers")
    public String book(){
    }
}
//9ad entities w lcontrollers