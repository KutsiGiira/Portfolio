package com.example.UserInfo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "monthlybooking")
public class MonthlyBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date Enter_date;
    private int payement;

    public MonthlyBooking(int id, Date enter_date, int payement) {
        this.id = id;
        Enter_date = enter_date;
        this.payement = payement;
    }

    public MonthlyBooking(int payement, Date enter_date) {
        this.payement = payement;
        Enter_date = enter_date;
    }

    public MonthlyBooking() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getEnter_date() {
        return Enter_date;
    }

    public void setEnter_date(Date Enter_date) {
        this.Enter_date = Enter_date;
    }

    public int getPayement() {
        return payement;
    }

    public void setPayement(int payement) {
        this.payement = payement;
    }

    @Override
    public String toString() {
        return "MonthlyBooking{" +
                "id=" + id +
                ", Enter_date=" + Enter_date +
                ", payement=" + payement +
                '}';
    }
}
