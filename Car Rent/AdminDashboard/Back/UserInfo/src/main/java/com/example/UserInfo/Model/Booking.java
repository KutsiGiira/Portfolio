package com.example.UserInfo.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date start_date;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date end_date;
    private String fname;
    private String lname;
    private String email;
    private String phone;
    private String address;
    private String ville;
    private int code_postal;
    private int permis_number;
    private String car_name;
    private int payement;

    public Booking(int id, Date start_date, Date end_date, String fname, String lname, String email, String phone, String address, String ville, int code_postal, int permis_number,  String car_name, int payement) {
        this.id = id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.ville = ville;
        this.code_postal = code_postal;
        this.permis_number = permis_number;
        this.car_name = car_name;
        this.payement = payement;
    }

    public Booking(Date start_date, Date end_date, String fname, String lname, String email, String phone, String address, String ville, int code_postal, int permis_number ,String car_name, int payement) {
        this.start_date = start_date;
        this.end_date = end_date;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.ville = ville;
        this.code_postal = code_postal;
        this.permis_number = permis_number;
        this.car_name = car_name;
        this.payement = payement;


    }

    public Booking() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getphone() {
        return phone;
    }

    public void setphone(String phone) {
        this.phone = phone;
    }

    public String getAdresse() {
        return address;
    }

    public void setAdresse(String address) {
        this.address = address;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public int getCode_postal() {
        return code_postal;
    }

    public void setCode_postal(int code_postal) {
        this.code_postal = code_postal;
    }

    public int getPermis_number() {
        return permis_number;
    }

    public void setPermis_number(int permis_number) {
        this.permis_number = permis_number;
    }

    public String getCar_name() {
        return car_name;
    }

    public void setCar_name(String car_name) {
        this.car_name = car_name;
    }

    public int getPayement() {
        return payement;
    }

    public void setPayement(int payement) {
        this.payement = payement;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", start_date=" + start_date +
                ", end_date=" + end_date +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", address='" + address + '\'' +
                ", ville='" + ville + '\'' +
                ", code_postal=" + code_postal +
                ", car_name=" + car_name +
                ", permis_number=" + permis_number +
                ", payement=" + payement +
                '}';
    }
}
