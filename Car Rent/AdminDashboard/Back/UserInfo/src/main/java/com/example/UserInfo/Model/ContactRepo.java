package com.example.UserInfo.Model;

import com.example.UserInfo.Controller.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepo extends JpaRepository<Contact, Integer> {

    @Query("SELECT COUNT(*) FROM Contact c")
     long getTotalCostumers();
}
