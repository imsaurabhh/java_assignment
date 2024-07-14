package com.customer_crud.controller;

import com.customer_crud.model.Customer;
import com.customer_crud.service.CustomerService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api"})
@CrossOrigin({"*"})
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping(value = {"/customer"},consumes = {"application/json"})
    public Customer postCustomer(@RequestBody Customer customer){
        return customerService.createCustomer(customer);
    }
    @GetMapping(value = {"/customers"})
    public List<Customer> getCustomers(){
        return customerService.getCustomers();
    }
    @DeleteMapping(value = {"/customer/{id}"})
    public ResponseEntity<?> deleteCustomer(@PathVariable long id){
        try {
            customerService.deleteCustomer(id);
            return new ResponseEntity<>("Customer with id = " + id + "deleted successfully",HttpStatus.OK);
        }catch (EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping(value = {"/customer/{id}"})
    public ResponseEntity<?> getCustomerById(@PathVariable long id){
        Customer customer = customerService.getCustomerById(id);
        if (customer == null){
            return new ResponseEntity<>("Customer with id ="+ id +" Not Found",HttpStatus.NOT_FOUND);
        }else {
            return ResponseEntity.ok(customer);
        }
    }
    @PutMapping(value = {"/customer/{id}"})
    public Customer updateCustomerById(@PathVariable long id,@RequestBody Customer customer){
        return customerService.updateCustomerById(id,customer);
    }
}
