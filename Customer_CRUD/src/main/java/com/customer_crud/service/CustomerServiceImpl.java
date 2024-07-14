package com.customer_crud.service;

import com.customer_crud.dao.CustomerDao;
import com.customer_crud.model.Customer;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
    private CustomerDao customerDao;

    @Override
    public Customer createCustomer(Customer customer) {
        return customerDao.save(customer);
    }

    @Override
    public Customer getCustomerById(long id) {
        return customerDao.findById(id).orElse(null);
    }

    @Override
    public List<Customer> getCustomers() {
        return customerDao.findAll();
    }

    @Override
    public void deleteCustomer(long id) {
        if(!customerDao.existsById(id)){
            throw new EntityNotFoundException("Customer with id =" + id + " Not Found");
        }else{
            customerDao.deleteById(id);
        }
    }

    @Override
    public Customer updateCustomerById(long id,Customer customer) {

        Optional<Customer> optionalCustomer = customerDao.findById(id);

        if(optionalCustomer.isPresent()){
            Customer existingCustomer = optionalCustomer.get();
            existingCustomer.setFirstName(customer.getFirstName());
            existingCustomer.setLastName(customer.getLastName());
            existingCustomer.setAddress(customer.getAddress());
            existingCustomer.setCity(customer.getCity());
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setState(customer.getState());
            existingCustomer.setPhone(customer.getPhone());

            return customerDao.save(existingCustomer);

        }
        return null;
    }
}
