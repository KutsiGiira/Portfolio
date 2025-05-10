package com.example.UserInfo.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthlyRepo extends JpaRepository<MonthlyBooking, Integer> {

    @Query("SELECT SUM(m.payement) FROM MonthlyBooking m WHERE MONTH(m.Enter_date) = MONTH(CURRENT_DATE)")
    long sum();
}
