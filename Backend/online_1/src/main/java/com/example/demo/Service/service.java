package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.Repository.repository;

import jakarta.persistence.EntityManager;

@Service
public class service {

    @Autowired
    private repository re;

    @Autowired
    EntityManager entityManager;
    
    public User savedetails(User user){
        return re.save(user);
    }
    public List<User> getAll(){
        return re.findAll();
    }
}