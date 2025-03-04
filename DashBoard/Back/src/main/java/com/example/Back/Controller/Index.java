package com.example.Back.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class Index {
    @GetMapping("/dashboard")
    public String index(){
        return "helloworld";
    }
}
