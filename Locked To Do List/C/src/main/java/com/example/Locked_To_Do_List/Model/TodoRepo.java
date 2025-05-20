package com.example.Locked_To_Do_List.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Repository
public interface TodoRepo extends JpaRepository<TodoList, Integer> {
    List<TodoList> findByUser(UserInfo userInfo);
}
