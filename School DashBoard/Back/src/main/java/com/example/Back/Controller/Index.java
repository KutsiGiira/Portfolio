package com.example.Back.Controller;

import com.example.Back.Dao.StudentRepo;
import com.example.Back.Dao.TeacherRepo;
import com.example.Back.Model.Students;
import com.example.Back.Model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:5173")
public class Index {
    @Autowired
    private StudentRepo studRepo;
    @Autowired
    private TeacherRepo teaRepo;
    @GetMapping("/students")
    public List<Students> AllStudent(){
        return studRepo.findAll();
    }
    @GetMapping("/teachers")
    public List<Teacher> AllTeacher(){
        return teaRepo.findAll();
    }
    @PostMapping("/students")
    public Students addStud(@RequestBody Students std){
        return studRepo.save(std);
    }
    @PostMapping("/teachers")
    public Teacher addTea(@RequestBody Teacher teacher){
        return teaRepo.save(teacher);
    }
    @DeleteMapping("/teachers/{id}")
    public void DeleteTea(@PathVariable int id){
        teaRepo.deleteById(id);
    }
    @DeleteMapping("/students/{id}")
    public void DeleteStd(@PathVariable int id){
        studRepo.deleteById(id);
    }
}
