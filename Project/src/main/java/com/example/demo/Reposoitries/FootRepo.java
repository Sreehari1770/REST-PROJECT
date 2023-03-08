package com.example.demo.Reposoitries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.FootBall;

public interface FootRepo extends JpaRepository<FootBall,Integer> {

}
