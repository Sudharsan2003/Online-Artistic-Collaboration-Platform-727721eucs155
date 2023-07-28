package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.service;
import com.example.demo.entity.User;


@CrossOrigin
@RestController
public class controller {
    
    @Autowired
    service ser;
    
    @PostMapping("/register")
    public String saveUser(@RequestBody User user) {
		ser.savedetails(user);
        return "Saved";
    }

    @GetMapping("/findall")
    public List<User> getALL(){
        List<User>allUsers = ser.getAll();
		return allUsers;
    }
}