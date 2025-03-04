package com.example.Back.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String First_Name;
    private String Last_Name;
    private double Phone_number;
    private String Subject;
    private String Class;
    private String Cin;

    public Teacher(int id, String first_Name, String last_Name, double phone_number, String subject, String aClass, String cin) {
        this.id = id;
        First_Name = first_Name;
        Last_Name = last_Name;
        Phone_number = phone_number;
        Subject = subject;
        Class = aClass;
        Cin = cin;
    }

    public Teacher(String first_Name, String last_Name, double phone_number, String subject, String aClass, String cin) {
        First_Name = first_Name;
        Last_Name = last_Name;
        Phone_number = phone_number;
        Subject = subject;
        Class = aClass;
        Cin = cin;
    }

    public Teacher() {
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

    public double getPhone_number() {
        return Phone_number;
    }

    public void setPhone_number(double phone_number) {
        Phone_number = phone_number;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String subject) {
        Subject = subject;
    }

    public String getClassLvl() {
        return Class;
    }

    public void setClass(String aClass) {
        Class = aClass;
    }

    public String getCin() {
        return Cin;
    }

    public void setCin(String cin) {
        Cin = cin;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", First_Name='" + First_Name + '\'' +
                ", Last_Name='" + Last_Name + '\'' +
                ", Phone_number=" + Phone_number +
                ", Subject='" + Subject + '\'' +
                ", Class='" + Class + '\'' +
                ", Cin='" + Cin + '\'' +
                '}';
    }
}
