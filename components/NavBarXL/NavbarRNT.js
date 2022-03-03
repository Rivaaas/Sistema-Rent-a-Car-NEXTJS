import React from 'react';

import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Items, Title, Color } from '../../styles/pages/NavBarStyle';


const NavbarRNT = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="ligth" >
                <Container className="nave">
                    <Navbar.Brand href="/" className="nave" >
                        <Title>Inicio</Title>
                    </Navbar.Brand>
                    <Navbar.Toggle className="border" aria-controls="responsive-navbar-nav">
                        <Button variant="dark">Menu</Button>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nave">
                            <Nav.Link href="/Catalogue" >
                            <Items>Vehiculos</Items>
                            </Nav.Link>                       
                            <Nav.Link href="/Instructions">
                            <Items>Como Funciona</Items>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
};

export default NavbarRNT;
