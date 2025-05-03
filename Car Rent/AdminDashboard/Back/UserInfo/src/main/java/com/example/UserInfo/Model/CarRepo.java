package com.example.UserInfo.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepo extends JpaRepository<Car, Long> {

    @Query("SELECT COUNT(Name) FROM Car Name")
    long CountAllCars();
}