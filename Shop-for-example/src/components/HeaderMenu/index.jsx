import React from 'react';
import {Navbar} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
import Counter from "../Counter";

function HeaderMenu(props) {
    return (
        <div className="Header">
            <Navbar  collapseOnSelect expand="lg"  >
                <Navbar.Brand><NavLink to="/about">Logo</NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="Menu">
                        <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/about">About Us</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/product">Our Product</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/reviews">Reviews</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
<Counter/>
        </div>
    );
}

export default HeaderMenu;