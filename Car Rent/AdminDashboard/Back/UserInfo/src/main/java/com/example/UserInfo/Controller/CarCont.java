package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Booking;
import com.example.UserInfo.Model.Car;
import com.example.UserInfo.Model.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    @GetMapping("/cars/count")
    public ResponseEntity<Map<String, Long>> getCarCount() {
        long count = carrepo.CountAllCars();
        Map<String, Long> response = new HashMap<>();
        response.put("Total", count);
        return ResponseEntity.ok(response);
    }

    @GetMapping("cars/av")
    public ResponseEntity<Map<String, Long>> Avs(){
        Map<String,Long> res = new HashMap<>();
        res.put("AvNumber", carrepo.Av());
        return ResponseEntity.ok(res);
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
    @PatchMapping("/cars/edit/{id}")
    public Car EditCar(@PathVariable Long id, @RequestBody Car carDetails) {
        Optional<Car> CarUpdate = carrepo.findById(id);
        if (carDetails.getPrice() != null) {
            CarUpdate.get().setPrice(carDetails.getPrice());
        }
        if (carDetails.getStatus() != null) {
            CarUpdate.get().setStatus(carDetails.getStatus());
        }
        return carrepo.save(CarUpdate.get());
    }
    @DeleteMapping("/cars/del/{id}")
    public void carDelete(@PathVariable Long id){
        carrepo.deleteById(id);
    }
}