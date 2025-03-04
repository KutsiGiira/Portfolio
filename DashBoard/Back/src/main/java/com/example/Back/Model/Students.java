package com.example.Back.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Students {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String First_Name;
    private String Last_Name;
    private String Address;
    private double Phone_number;
    private String Class;

    public Students(int id, String first_Name, String last_Name, String address, double phone_number, String aClass) {
        this.id = id;
        First_Name = first_Name;
        Last_Name = last_Name;
        Address = address;
        Phone_number = phone_number;
        Class = aClass;
    }

    public Students(String first_Name, String last_Name, String address, double phone_number, String aClass) {
        First_Name = first_Name;
        Last_Name = last_Name;
        Address = address;
        Phone_number = phone_number;
        Class = aClass;
    }

    public Students() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_Name() {
        return First_Name;
    }

    public void setFirst_Name(String first_Name) {
        First_Name = first_Name;
    }

    public String getLast_Name() {
        return Last_Name;
    }

    public void setLast_Name(String last_Name) {
        Last_Name = last_Name;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public double getPhone_number() {
        return Phone_number;
    }

    public void setPhone_number(double phone_number) {
        Phone_number = phone_number;
    }

    public String getClassLevel() {
        return Class;
    }
    public void setClass(String aClass) {
        Class = aClass;
    }

    @Override
    public String toString() {
        return "Students{" +
                "id=" + id +
                ", First_Name='" + First_Name + '\'' +
                ", Last_Name='" + Last_Name + '\'' +
                ", Address='" + Address + '\'' +
                ", Phone_number=" + Phone_number +
                ", Class='" + Class + '\'' +
                '}';
    }
}
