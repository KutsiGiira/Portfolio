package com.example.Locked_To_Do_List.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "Todo")
public class TodoList {
    @Id
    private Integer id;
    private String todo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo user;
    public TodoList() {}
    public TodoList(String todo, UserInfo user) {
        this.todo = todo;
        this.user = user;
    }
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getTodo() { return todo; }
    public void setTodo(String todo) { this.todo = todo; }
    public UserInfo getUser() { return user; }
    public void setUser(UserInfo user) { this.user = user; }
}
