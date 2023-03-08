package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.FootBall;
import com.example.demo.Service.ApiService;

@RestController
public class ApiController {
	@Autowired
	ApiService service;
	@CrossOrigin
	@GetMapping("/football")
	public List<FootBall> Football(){
		return service.getFootball();
	}
	@CrossOrigin
	@PostMapping("/football")
	public String addFootball(@RequestBody FootBall football) {
		service.addFootball(football);
		return "Added Footballer"+ football.getId();
	}
	@CrossOrigin
	@DeleteMapping("/football")
	public String delete(@RequestParam int id ) {
		return service.deleteFootballById(id);
	}
	@CrossOrigin
	@PutMapping("/football")
	public String update(@RequestBody FootBall football) {
		return service.updateFootball(football);
	}
	

	@GetMapping("/football/{field}")
	public List<FootBall> FootballWithSort(@PathVariable String field){
		return service.getFootballSorted(field);
	}
	
	@GetMapping("/football/{offset}/{pageSize}")
	public List<FootBall> FootballWithPagination(@PathVariable int offset,@PathVariable int pageSize){
		return service.getFootballWithPagination(offset, pageSize);
	}
	
	@GetMapping("/football/{offset}/{pageSize}/{field}")
	public List<FootBall> getFootballWithPaginationAndSorting(@PathVariable int offset,@PathVariable int pageSize,@PathVariable String field){
	   return service.getFootballWithPaginationAndSorting(offset, pageSize, field);	
	}
}