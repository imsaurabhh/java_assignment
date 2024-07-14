import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [customers, setCustomers] = useState([]);

    const fetchAllCustomers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8080/api/customers', {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` }
            });
            if(response.ok){
                const data = await response.json();
                setCustomers(data); 
            }
        } catch (error) {
            console.log("Error message:", error.message);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        fetchAllCustomers();
    }, []);

    const handleDelete = async (customerid) => {
        try {
            const response = await fetch(
                `http://localhost:8080/api/customer/${customerid}`,
                {
                    method: "DELETE",
                }
            );
            if (response.ok) {
                fetchAllCustomers();
            }
            console.log(`customer with  ${customerid} Deleted Successfully`);
        } catch (error) {
            console.log("Error message:", error.message);
        }
    };

    const handleUpdate = (customerid) => {
        navigate(`/customer/${customerid}`);
    };

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h1 className="text-center text-primary mb-4 mt-1">
                            Customers
                        </h1>
                        <Table striped bordered hover responsive>
                            <thead className="text-center">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {customers.map((customer) => (
                                    <tr key={customer.id}>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.city}</td>
                                        <td>{customer.state}</td>
                                        <td>{customer.email }</td>
                                        <td>{customer.phone}</td>
                                        <td className="d-flex justify-content-evenly">
                                            <Button
                                                variant="outline-secondary"
                                                onClick={() =>
                                                    handleUpdate(customer.id)
                                                }
                                            >
                                                Update
                                            </Button>{" "}
                                            <Button
                                                onClick={() =>
                                                    handleDelete(customer.id)
                                                }
                                                variant="outline-danger"
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
