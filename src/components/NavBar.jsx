import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './ui.css'


function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand as={Link} to="/" className="Brand">
          <img
          src={require('../IMG/cutlery.png')}
          alt="Logo"
          width="40"
          height="40"
          className="d-inline-block align-top"
          />{' '}
          Flavors 101
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
          <NavDropdown title="Info" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/about">About us</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/community">
            Community
            </NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-secondary" as={Link} to="/login">Log In</Button>
        <Button variant="outline-dark" as={Link} to="/signup">Sign Up</Button>
        </Container>
      </Navbar>
      );
}
export default NavBar;