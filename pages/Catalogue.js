import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Btn, Img} from '../styles/pages/CatalogueStyle';
import Image from 'next/image';

const Fila = styled.div`
    margin-top: 5px;
`;





const Catalogue = () => {






    const [autos, setAutos] = useState([
        {
            title: 'Chevrolet',
            description: 'Prisma LTZ, 1.4, 5 puestos',
            precio: '$9.000.000',
            anio: '2018',
            image: '/1.jpg',
        },
        {
            title: 'Nissan',
            description: 'Qashqai, 1.7, 5 puestos',
            precio: '$12.000.000',
            anio: '2016',
            image: '/2.jpg',
        },
        {
            title: 'Toyota',
            description: 'Hilux, 2.0, 5 puestos',
            precio: '$20.000.000',
            anio: '2021',
            image: '/3.jpg',
        },
        {
            title: 'Subaru',
            description: 'XV, 2.4, 5 puestos',
            precio: '$18.000.000',
            anio: '2016',
            image: '/4.jpg',
        },
        {
            title: 'Hyundai',
            description: 'Accent, 1.2, 5 puestos',
            precio: '$15.000.000',
            anio: '2022',
            image: '/5.jpg',
        },
        {
            title: 'Audi',
            description: 'TT, 2.0, 4 puestos',
            precio: '$25.000.000',
            anio: '2019',
            image: '/6.jpg',
        },
        {
            title: 'Mercedes benz',
            description: 'a200, 1.6, 5 puestos',
            precio: '$18.000.000',
            anio: '2021',
            image: '/7.jpg',
        },
        {
            title: 'BMW',
            description: 'M4, 2.5, 5 puestos',
            precio: '$30.000.000',
            anio: '2022',
            image: '/8.jpg',
        },
    ]);


    return (
        <>
            <div className='container'>

                <div className='row'>
                    {
                        autos.map(auto => (
                            <div className='col-sm-3 col-3  d-flex mb-4' key={auto.title}>
                                <Card style={{ width: '15rem', height: '18rem' }}>
                                    <Img className='mt-4 d-flex' src='/3.jpg' alt="" width="90%" height="90%" />

                                    <Card.Body className='mb-3 align-items-start'>
                                        <Card.Title>{auto.title}</Card.Title>
                                        <Card.Text>
                                            {auto.description}

                                            <h5 className='mt-2'>{auto.anio}</h5>
                                        </Card.Text>

                                    </Card.Body>
                                    <Btn className='' variant="primary"><h2>{auto.precio}</h2></Btn>

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
