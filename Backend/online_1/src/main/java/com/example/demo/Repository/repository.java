package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;

public interface repository  extends JpaRepository<User,Integer>{

}