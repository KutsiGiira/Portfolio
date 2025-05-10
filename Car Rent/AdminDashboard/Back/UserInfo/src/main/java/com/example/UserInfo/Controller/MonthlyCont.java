package com.example.UserInfo.Controller;

import com.example.UserInfo.Model.MonthlyBooking;
import com.example.UserInfo.Model.MonthlyRepo;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/calc")
@CrossOrigin(origins = {"http://localhost:5173" ,"http://localhost:5174"})
public class MonthlyCont {
    @Autowired
    private MonthlyRepo mrepo;
    @GetMapping("/total")
    public ResponseEntity<HashMap<String, Long>> s(){
        HashMap<String, Long> tot = new HashMap<>();
        tot.put("TotalPayement", mrepo.sum());
        System.out.println(mrepo.sum());
            return ResponseEntity.ok(tot);
    }
    @PostMapping("/payement")
    public MonthlyBooking insert(@RequestBody MonthlyBooking monthlyBooking){
        if(monthlyBooking.getEnter_date() == null){
            monthlyBooking.setEnter_date(new Date());
        }
        return mrepo.save(monthlyBooking);
    }
}