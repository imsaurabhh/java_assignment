package com.customer_crud.service;

import com.customer_crud.model.Customer;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CustomerService {
    Customer createCustomer(Customer customer);

    Customer getCustomerById(long id);
    List<Customer> getCustomers();
    void deleteCustomer(long id);
    Customer updateCustomerById(long id,Customer customer);
}
