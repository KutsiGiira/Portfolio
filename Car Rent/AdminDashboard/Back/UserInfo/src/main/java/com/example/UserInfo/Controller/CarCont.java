package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Booking;
import com.example.UserInfo.Model.Car;
import com.example.UserInfo.Model.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = {"http://localhost:5173" ,"http://localhost:5174"} )
public class CarCont {
    @Autowired
    public CarRepo carrepo;

    //end point to get all cars

    @GetMapping("/cars")
    public List<Car> cars() {
        return carrepo.findAll();
    }

    //end point to add cars

    @PostMapping("/cars")
    public Car carPost(@RequestBody Car car) {
        return carrepo.save(car);
    }

    //end point to get Single cars

    @GetMapping("/cars/{id}")
    public Car findbyId(@PathVariable Long id){
            return carrepo.findById(id).orElseThrow(() -> new RuntimeException("Car not found"));
    }
}