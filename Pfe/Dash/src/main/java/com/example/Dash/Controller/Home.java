package com.example.Dash.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Home {
    @GetMapping("/")
    public String home(){
        return "home";
    }
    public class student {
        @GetMapping("/student")
        public String student(){
            return "test";
        }
    }
    public class teacher {
        @GetMapping("/teacher")
        public String teacher() {
            return "teacher";
            }
        }
}
