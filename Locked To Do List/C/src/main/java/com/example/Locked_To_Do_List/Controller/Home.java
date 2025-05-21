package com.example.Locked_To_Do_List.Controller;

import com.example.Locked_To_Do_List.Model.TodoList;
import com.example.Locked_To_Do_List.Model.TodoRepo;
import com.example.Locked_To_Do_List.Model.UserInfo;
import com.example.Locked_To_Do_List.Model.UserRepo;
import com.example.Locked_To_Do_List.Service.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class Home {
    @Autowired
    private TodoRepo todoRepo;

    @GetMapping("/todos")
    public ResponseEntity<List<TodoList>> getMyTodos(Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        UserInfo user = userDetails.getUserInfo();
        List<TodoList> todos = todoRepo.findByUser(user);
        return ResponseEntity.ok(todos);
    }
}