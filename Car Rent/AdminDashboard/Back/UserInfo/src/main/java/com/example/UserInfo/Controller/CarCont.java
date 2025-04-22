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

    @GetMapping("/cars")
    public List<Car> cars() {
        return carrepo.findAll();
    }
    //hadchi rah makayt9rach f lfront
    @PostMapping("/cars")
    public Car carPost(@RequestBody Car car) {
        return carrepo.save(car);
    }

    //9ad hadi rah ha bditiha wa9ila rah kamlha mkhrb9a mhm 9ad api li ijib singles
    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Car car = carrepo.getReferenceById(id);
        if (car != null) {
            return ResponseEntity.ok(car);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}