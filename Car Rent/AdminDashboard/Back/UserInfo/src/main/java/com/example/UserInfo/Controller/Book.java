package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Booking;
import com.example.UserInfo.Model.BookingRepo;
import com.example.UserInfo.Model.Car;
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
    }
        //khriti wa9ila hna 7it katjib lik l user machi tomobil
//    @GetMapping("/booking/{id}")
//    public Booking findbyId(@PathVariable int id){
//        return brepo.findById(id).orElseThrow(() -> new RuntimeException("Car not found"));
//    }
}