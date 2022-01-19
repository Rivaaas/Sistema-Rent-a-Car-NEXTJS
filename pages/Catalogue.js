import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { TextPrecio } from '../styles/pages/CatalogueStyle';
import Image from 'next/image';

const Fila = styled.div`
    margin-top: 5px;
`;




const Catalogue = () => {






    const [autos, setAutos] = useState([
        {
            title: 'Auto',
            description: 'DescripcionDeAuto',
            precio: 'Precios',
            image: '/auto.jpg',
        },
        {
            title: 'Auto',
            description: 'DescripcionDeAuto',
            precio: 'Precios',
            image: '',
        },
        {
            title: 'Auto',
            description: 'DescripcionDeAuto',
            precio: 'Precios',
            image: '',
        },
        {
            title: 'Auto',
            description: 'DescripcionDeAuto',
            precio: 'Precios',
            image: '',
        },
        {
            title: 'Auto',
            description: 'DescripcionDeAuto',
            precio: 'Precios',
            image: '',
        },
        {
            title: 'Auto',
            description: 'DescripcionDeAuto',
            precio: 'Precios',
            image: '',
        },
    ]);


    return (
        <>
            <div className='container'>

                <div className='row'>
                    {
                        autos.map(auto => (
                            <div className='col-sm-3'>
                                <Card style={{ width: '15rem', height: '19rem' }}>
                                    <img src='/3.jpg' alt="" width="100%" height="100%" />
                                    <Card.Body>
                                        <Card.Title>{auto.title}</Card.Title>
                                        <Card.Text>
                                            {auto.description}
                                            <TextPrecio>
                                                {auto.precio}
                                            </TextPrecio>
                                        </Card.Text>
                                        <Button variant="primary">Ver mas</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Catalogue
