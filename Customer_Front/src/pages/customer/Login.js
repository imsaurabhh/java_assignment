import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './PostUser.css'
import {useNavigate} from 'react-router-dom'


export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
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
            const response = await fetch("http://localhost:8080/api/auth/signin",{
                method : "POST",
                headers : {"Content-Type": "application/json"},
                body : JSON.stringify(formData)
            });            
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                localStorage.setItem('token', data.token);
                navigate("/customers")
            } else {
                alert('Login failed:');
            }
        } catch (error) {
            console.log("error message:",error.message);
        }
    }

    return (
        <>
            <div className="center-form d-flex justify-content-center align-items-center flex-column ">
                <h1 className="text-center text-primary mb-5 mt-4 ">Sign in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="login_id">
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="form-column"
                        autoFocus
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
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
