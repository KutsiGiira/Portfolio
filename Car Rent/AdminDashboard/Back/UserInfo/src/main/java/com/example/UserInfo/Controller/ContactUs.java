package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Contact;
import com.example.UserInfo.Model.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class ContactUs {
    @Autowired
    private ContactRepo crepo;
    @GetMapping("/contact")
    public List<Contact> contactUs(){
        return crepo.findAll();
    }
}
