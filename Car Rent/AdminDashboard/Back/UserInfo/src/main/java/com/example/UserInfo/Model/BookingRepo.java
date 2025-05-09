package com.example.UserInfo.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Integer> {

    @Query("SELECT SUM(b.payement) FROM Booking b WHERE MONTH(b.start_date) = MONTH(CURRENT_DATE)")
    long payement();
}
