package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Model.FootBall;
import com.example.demo.Reposoitries.FootRepo;


@Service
public class ApiService {

    @Autowired
    FootRepo repository;
    
    public String addFootball(FootBall football) {
    	repository.save(football);
    	return "Added";
    }
    
    public List<FootBall> getFootball(){
    	return repository.findAll();
    }
    public String deleteFootballById(int id) {
		repository.deleteById(id);
		return "Footballer deleted";
	}
    public String updateFootball(FootBall football) {
		repository.save(football);
		return "Updated";
	}
//    Sorting
    public List<FootBall> getFootballSorted(String field){
    	return repository.findAll(Sort.by(Sort.Direction.ASC,field));
    		
    }
//    pagination
    public List<FootBall> getFootballWithPagination(int offset,int pageSize){
    	Page<FootBall> page=repository.findAll(PageRequest.of(offset, pageSize));
    	return page.getContent();
    }
//    pagination and sorting
    public List<FootBall> getFootballWithPaginationAndSorting(int offset,int pageSize, String field){
    	PageRequest paging=PageRequest.of(offset, pageSize,Sort.by(field));
    	Page<FootBall> page=repository.findAll(paging);
    	return page.getContent();
    }
}