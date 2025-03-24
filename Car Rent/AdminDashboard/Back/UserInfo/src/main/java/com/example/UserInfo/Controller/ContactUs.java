package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Contact;
import com.example.UserInfo.Model.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:5173" ,"http://localhost:5174"} )
public class ContactUs {
    @Autowired
    private ContactRepo crepo;
    @GetMapping("/contact")
    public List<Contact> contactUs(){
        return crepo.findAll();
    }
    @PostMapping("/contact")
    public Contact contact(@RequestBody Contact contact){
        return crepo.save(contact);
    }
}