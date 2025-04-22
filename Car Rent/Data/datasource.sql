CREATE USER 'carRent'@'localhost' IDENTIFIED BY 'carRent';
GRANT ALL PRIVILEGES ON *.* TO 'carRent'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
-- connect to user using MYSQL by querring those commandes
-- \sql
-- \connect carRent@localhost:3306
-- password carRent
CREATE DATABASE caradmin;
USE caradmin;
-- we have 3 (booking , car  , contact )
-- first table

CREATE TABLE booking (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Start_Date DATE,
    End_Date DATE,
    fname VARCHAR(40),
    Lname VARCHAR(30),
    email VARCHAR(50),
    phone VARCHAR(15),
    address VARCHAR(40),
    Ville VARCHAR(20),
    Code_Postal INT,
    permis_number INT,
);
 
 --second table 

 CREATE TABLE car (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Image LONGBLOB,
    Name VARCHAR(50),
    price VARCHAR(20),
    Status ENUM('Available', 'Rented') NOT NULL,
    Description TEXT,
    Transmition ENUM('Automatique', 'Manuel'),
    Categories ENUM('SUV', 'Compacte', 'Electrique'),
    Carburant ENUM('Essence', 'Diesel', 'Electrique'),
    Caracteristique TEXT,
);

-- third table

CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(40),
    Email VARCHAR(50),
    Sujet VARCHAR(40),
    Message TEXT,
);

