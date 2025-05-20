package com.example.Locked_To_Do_List.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserInfo, Integer> {
    Optional<UserInfo> findByUsername(String username);
}
