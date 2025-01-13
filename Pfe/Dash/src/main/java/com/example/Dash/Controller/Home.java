package com.example.Dash.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Home {
    @GetMapping("/")
    public String home(){
        return "index";
    }
    @GetMapping("/student")
    public String student(){
        return "student";
    }
    @GetMapping("/teacher")
    public String teacher(){
        return "teacher";
    }
}
