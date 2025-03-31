package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Booking;
import com.example.UserInfo.Model.BookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:5173" ,"http://localhost:5174"} )
public class Book {
    @Autowired
    private BookingRepo brepo;
    @GetMapping("/booking")
    public List<Booking> book(){
        return brepo.findAll();
    }
    @PostMapping("/booking")
    public Booking reserv(@RequestBody Booking bg){
        return brepo.save(bg);
        //wa9ila aykhsk t3awd entity mn lowl 7it mam9adch dkchi mzyan
    }
}