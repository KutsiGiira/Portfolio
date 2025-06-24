package com.example.UserInfo.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthlyRepo extends JpaRepository<MonthlyBooking, Integer> {

    @Query("SELECT SUM(m.payement) FROM MonthlyBooking m WHERE MONTH(m.Enter_date) = MONTH(CURRENT_DATE) and YEAR(m.Enter_date) = YEAR(CURRENT_DATE)")
    long sum();
    @Query("SELECT MONTH(m.Enter_date) From MonthlyBooking m")
    long month();
}
