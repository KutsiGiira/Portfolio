package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Contact;
import com.example.UserInfo.Model.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/contact/TotalCostumers")
    public ResponseEntity<Map<String, Long>> TotalCos(){
        Map<String, Long> Cos = new HashMap<>();
        Cos.put("Costumers", crepo.getTotalCostumers());
        return ResponseEntity.ok(Cos);
    }
    @PostMapping("/contact")
    public Contact contact(@RequestBody Contact contact){
        return crepo.save(contact);
    }
    @DeleteMapping("/contact/read/{id}")
    public void read(@PathVariable int id){
        crepo.deleteById(id);
    }
}