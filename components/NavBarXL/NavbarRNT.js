import React from 'react';

import Link from 'next/link';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Items, Title, Color } from '../../styles/pages/NavBarStyle';


const NavbarRNT = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="ligth" >
                <Container classname="nave">
                    <Navbar.Brand href="/" className="nave" >
                        <Title>Inicio</Title>
                    </Navbar.Brand>
                    <Navbar.Toggle classname="border" aria-controls="responsive-navbar-nav">
                        <Button variant="dark">Menu</Button>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nave">
                            <Nav.Link href="/catalogue" >
                            <Items>Vehiculos</Items>
                            </Nav.Link>
                            <Nav.Link href="/agreement">
                            <Items>Contrato</Items>
                            </Nav.Link>
                            <Nav.Link href="/comoFunciona">
                            <Items>Como Funciona</Items>
                            </Nav.Link>
                            <Nav.Link href="/login">
                            <Items>Log In</Items>
                            </Nav.Link>
                            <Nav.Link href="/vehicleReceipt">
                            <Items>Entrega de vehiculo</Items>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
};

export default NavbarRNT;
