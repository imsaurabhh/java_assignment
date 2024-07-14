import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './PostUser.css'
import {useNavigate} from 'react-router-dom'


export default function PostUser() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state:"",
        email:"",
        phone:""
    });

    const handleInputChange =(event)=>{
        const{name, value} = event.target;
        setFormData({
                ...formData,
                [name]:value
        })
    }

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await fetch("http://localhost:8080/api/customer",{
                method : "POST",
                headers : {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify(formData)
            });
            const data = await response.json();
            console.log("Customer created:", data);
            navigate("/customers")
        } catch (error) {
            console.log("error message:",error.message);
        }
    }

    return (
        <>
            <div className="center-form d-flex justify-content-center align-items-center flex-column ">
                <h1 className="text-center text-primary mb-5 mt-4 ">Post New Customer</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-column"
                        autoFocus
                        required
                    />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-column"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Control
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="form-column"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Control
                        type="text"
                        name="city"
                        placeholder="Enter City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="form-column"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="state">
                    <Form.Control
                        type="text"
                        name="state"
                        placeholder="Enter State"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="form-column"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-column"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="Enter Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-column"
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100 mt-3 btn-dark" >
                        Submit
                </Button>
            </Form>
            </div>
        </>
    );
}
