import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'; // Import necessary components from react-bootstrap
import '../styles/index.scss'; // Import the SCSS file

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/">Hackathon Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            {/* <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item> */}
            {/* <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item> */}
            <NavDropdown.Item as={Link} to="/lms">LMS</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/communication">Communication</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/event-management">Event Management</NavDropdown.Item>
            {/* <NavDropdown.Item as={Link} to="/pricing">Pricing</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link as={Link} to="/Login">Login</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
