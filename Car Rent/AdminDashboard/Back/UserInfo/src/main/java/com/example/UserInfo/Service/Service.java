package com.example.UserInfo.Service;

import com.example.UserInfo.Model.BookingRepo;
import com.example.UserInfo.Model.CarRepo;
import com.example.UserInfo.Model.ContactRepo;
import com.example.UserInfo.Model.MonthlyRepo;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    private CarRepo carrepo;

    @Autowired
    private ContactRepo contactRepo;

    @Autowired
    private BookingRepo brepo;

    @Autowired
    private MonthlyRepo mrepo;

    public long CountAllCars(){
        return carrepo.CountAllCars();
    }
    public long getTotalCostumers(){
        return contactRepo.getTotalCostumers();
    }
    public long AvCars(){
        return carrepo.Av();
    }
    public long sum(){return mrepo.sum();}
}