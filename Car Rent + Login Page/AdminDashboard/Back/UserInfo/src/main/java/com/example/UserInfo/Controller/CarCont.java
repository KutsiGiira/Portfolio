package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.Booking;
import com.example.UserInfo.Model.Car;
import com.example.UserInfo.Model.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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
    @GetMapping("/images/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Car car = carrepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        byte[] image = car.getImage();
        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(image);
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
    @PostMapping(value = "/cars", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Car> uploadCar(
            @RequestPart("file") MultipartFile file,
            @RequestPart("name") String name,
            @RequestPart("price") String price,
            @RequestPart("status") String status,
            @RequestPart("description") String description,
            @RequestPart("transmition") String transmition,
            @RequestPart("categories") String categories,
            @RequestPart("carburant") String carburant,
            @RequestPart("caracteristique") String caracteristique
    ) throws IOException {
        Car car = new Car();
        car.setImage(file.getBytes());
        car.setName(name);
        car.setPrice(price);
        car.setStatus(Car.Status.valueOf(status));
        car.setDescription(description);
        car.setTransmition(Car.Transmition.valueOf(transmition));
        car.setCategories(Car.Categories.valueOf(categories));
        car.setCarburant(Car.Carburant.valueOf(carburant));
        car.setCaracteristique(caracteristique);

        Car saved = carrepo.save(car);
        return ResponseEntity.ok(saved);
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