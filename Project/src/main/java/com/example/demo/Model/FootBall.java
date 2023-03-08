package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FootBall {
	@Id
	private int id;
	private String Name;
	private String ClubName;
	private int Playernumber;
	private String position;
	private int age;
	private String country;
	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getPlayernumber() {
		return Playernumber;
	}

	public void setPlayernumber(int playernumber) {
		Playernumber = playernumber;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getClubName() {
		return ClubName;
	}
	public void setClubName(String clubName) {
		ClubName = clubName;
	}
	

}
