package com.example.UserInfo.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "contact")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String email;
    private String sujet;
    private String message;

    public Contact(int id, String nom, String email, String sujet, String message) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.sujet = sujet;
        this.message = message;
    }

    public Contact(String nom, String email, String sujet, String message) {
        this.nom = nom;
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
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
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
                ", nom='" + nom + '\'' +
                ", email='" + email + '\'' +
                ", sujet='" + sujet + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
