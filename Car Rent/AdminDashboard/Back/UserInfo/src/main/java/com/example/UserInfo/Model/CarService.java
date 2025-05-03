package com.example.UserInfo.Model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    @Autowired
    private CarRepo carrepo;

    @Autowired
    private ContactRepo contactRepo;

    public long CountAllCars(){
        return carrepo.CountAllCars();
    }
    public long getTotalCostumers(){
        return contactRepo.getTotalCostumers();
    }
}
