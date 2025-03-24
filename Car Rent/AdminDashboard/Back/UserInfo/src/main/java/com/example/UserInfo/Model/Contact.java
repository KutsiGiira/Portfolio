package com.example.UserInfo.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "contact")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String sujet;
    private String message;

    public Contact(int id, String name, String email, String sujet, String message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.sujet = sujet;
        this.message = message;
    }

    public Contact(String name, String email, String sujet, String message) {
        this.name = name;
        this.email = email;
        this.sujet = sujet;
        this.message = message;
    }

    public Contact() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return name;
    }

    public void setNom(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSujet() {
        return sujet;
    }

    public void setSujet(String sujet) {
        this.sujet = sujet;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Contact{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", sujet='" + sujet + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
