import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { FaList } from "react-icons/fa";

import headerlogo from '../../../images/headerlogo.jpg';
 
const Header = () => {
  
  return (
    <Navbar  fixed="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <img className="p-0 m-2" alt="" src={headerlogo} width="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          
        </Nav>
        <Nav
              className="  my-2 my-lg-0 header"
              style={{ maxHeight: '100px'  }}
              navbarScroll
            >
       
       <Nav.Link as={HashLink} to="/home">
         Home
          </Nav.Link>
          <Nav.Link as={HashLink}   to="/profile">
             Profile
          </Nav.Link>
          <Nav.Link as={HashLink}   to="/design">
           Design & Development
          </Nav.Link>
          <Nav.Link  as={HashLink}   to="/factory">
          Factory
          </Nav.Link>
          <Nav.Link as={HashLink}   to="/products">
          Products
          </Nav.Link>
          {/* <Nav.Link as={HashLink}   to="/register">
        Regsiter Us
          </Nav.Link> */}
          <Nav.Link as={HashLink}   to="/contactus">
          Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;