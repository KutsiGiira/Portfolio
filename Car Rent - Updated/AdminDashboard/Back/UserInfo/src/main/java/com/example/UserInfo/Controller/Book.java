package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Booking;
import com.example.UserInfo.Model.BookingRepo;
import com.example.UserInfo.Model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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
        System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA  " + bg);
        return brepo.save(bg);
    }

    @GetMapping("/booking/{id}")
    public Booking CarToBook(@PathVariable int id){
        return brepo.findById(id).orElseThrow(() -> new RuntimeException("no Car"));
    }
    @DeleteMapping("/confirm/{id}")
    public String ConfirmBook(@PathVariable int id) {
        if (brepo.existsById(id)) {
            brepo.deleteById(id);
            return "deleted";
        }
        return "Not found";
    }
    @GetMapping("/booking/sumPayement")
    public ResponseEntity<HashMap<String, Long>> payementSum(){
        HashMap<String, Long> sum = new HashMap<>();
        sum.put("Sum", brepo.payement());
        return ResponseEntity.ok(sum);
    }
}