"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Menu } from "./menu.component";

export default function Header() {
    useEffect(() => {}, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="container-fluid">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Menu title="mainMenu" alignment="me-auto" />
                    <Navbar.Brand href="#home" className="d-none d-lg-block">
                        <Image
                            src="https://rameyroadeus01.blob.core.windows.net/westover-content/42bb860e-8200-415d-9fb8-605e274488ba-westover_icon.png"
                            alt="Westover Church"
                            width="50"
                            height="52"
                        />
                    </Navbar.Brand>
                    <Menu title="rightMenu" alignment="ms-auto" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
