package com.example.UserInfo.Model;

import jakarta.persistence.*;

import java.util.Arrays;

@Entity
@Table(name="Car")
public class Car {
    //9ad tswira rah makadozch l db
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Lob
    private byte[] image;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(nullable = false, length = 20)
    private String price;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    private String description;

    @Enumerated(EnumType.STRING)
    private Transmition transmition;

    @Enumerated(EnumType.STRING)
    private Categories categories;

    @Enumerated(EnumType.STRING)
    private Carburant carburant;

    private String caracteristique;

    public Car(Long id, byte[] image, String name, String price, Status status, String description, Transmition transmition, Categories categories, Carburant carburant, String caracteristique) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.price = price;
        this.status = status;
        this.description = description;
        this.transmition = transmition;
        this.categories = categories;
        this.carburant = carburant;
        this.caracteristique = caracteristique;
    }

    public Car(byte[] image, String name, String price, Status status, String description, Transmition transmition, Categories categories, Carburant carburant, String caracteristique) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.status = status;
        this.description = description;
        this.transmition = transmition;
        this.categories = categories;
        this.carburant = carburant;
        this.caracteristique = caracteristique;
    }

    public Car() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Transmition getTransmition() {
        return transmition;
    }

    public void setTransmition(Transmition transmition) {
        this.transmition = transmition;
    }

    public Categories getCategories() {
        return categories;
    }

    public void setCategories(Categories categories) {
        this.categories = categories;
    }

    public Carburant getCarburant() {
        return carburant;
    }

    public void setCarburant(Carburant carburant) {
        this.carburant = carburant;
    }

    public String getCaracteristique() {
        return caracteristique;
    }

    public void setCaracteristique(String caracteristique) {
        this.caracteristique = caracteristique;
    }

    public enum Status {
        Available,
        Rented
    }

    public enum Transmition {
        Automatique,
        Manuel
    }

    public enum Categories {
        SUV,
        Compacte,
        Electrique
    }

    public enum Carburant {
        Essence,
        Diesel,
        Electrique
    }



    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", image=" + Arrays.toString(image) +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                ", status=" + status +
                ", description='" + description + '\'' +
                ", transmition=" + transmition +
                ", categories=" + categories +
                ", carburant=" + carburant +
                ", caracteristique='" + caracteristique + '\'' +
                '}';
    }
}
