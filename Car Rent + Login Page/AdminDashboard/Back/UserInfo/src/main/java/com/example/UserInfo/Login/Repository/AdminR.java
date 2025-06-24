package com.example.UserInfo.Login.Repository;

import com.example.UserInfo.Login.Model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminR extends JpaRepository<Admin, Integer> {
    Admin findByUsername(String username);
}
