import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
   return (
      <>
         <Navbar className="Navbar">
            <Container className="Container d-flex  ">
               <Navbar.Brand href="/" className="Navbar-Brand ">
                  Customer Management System
               </Navbar.Brand>
               <Nav className="ml-auto d-flex">   
                  <Nav.Link as={Link} to="/customers" className="Nav-link">
                     Customers
                  </Nav.Link>
                  <Nav.Link as={Link} to="/customer" className="Nav-link">
                     Create Customer
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="Nav-link">
                     Sign in
                  </Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </>
   );
}
