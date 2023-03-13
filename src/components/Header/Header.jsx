import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to="/add-blog">
            <Navbar.Brand>Add Blog</Navbar.Brand>
          </Link>
          <Link to="/about-us">
            <Navbar.Brand>About Us</Navbar.Brand>
          </Link>
          <Link to="/contacts">
            <Navbar.Brand>Contacts</Navbar.Brand>
          </Link>
          <Link to="/favorites">
            <Navbar.Brand>Favorites</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
