package com.example.UserInfo.Model;

import com.example.UserInfo.Controller.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarService {
    @Autowired
    private CarRepo carrepo;

    @Autowired
    private ContactRepo contactRepo;

    @Autowired
    private BookingRepo brepo;

    public long CountAllCars(){
        return carrepo.CountAllCars();
    }
    public long getTotalCostumers(){
        return contactRepo.getTotalCostumers();
    }
    public long AvCars(){
        return carrepo.Av();
    }
    public long sum(){return brepo.payement();}
}
