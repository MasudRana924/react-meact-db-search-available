import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    
                    <Nav className="me-auto mx-auto">
                    <NavLink to="/home" className="ms-5 text-decoration-none">Home</NavLink>
                    <NavLink to="/about" className="ms-5 text-decoration-none">About US</NavLink>
                    <NavLink to="/contact" className="ms-5 text-decoration-none">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;