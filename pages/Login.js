import React from 'react'
import Link from 'next/link';

import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';


const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 120px;
`;

const Login = () => {
    return (
        <>
            <FormStyle>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Ingresa tu nombre de usuario</Form.Label>
                        <Form.Control type="email" placeholder="Usuario" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>
            </FormStyle>
        </>
    )
}

export default Login
