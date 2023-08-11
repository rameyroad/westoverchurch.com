"use client";

import { useEffect } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Menu } from "./menu.component";

export default function Header() {
    useEffect(() => {}, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="container-fluid">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Menu title="mainMenu" alignment="me-auto" />
                    <Navbar.Brand href="#home" className=" d-none d-lg-block">
                        <img src="https://www.westoverchurch.com/views/site/images/footer_logo.png" alt="Westover Church" />
                    </Navbar.Brand>
                    <Menu title="leftMenu" alignment="ms-auto" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
