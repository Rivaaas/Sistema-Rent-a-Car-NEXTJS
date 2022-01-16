import React from 'react'
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';

import styled from 'styled-components';

import img1 from '../public/IMG/3.jpg';
import CardImg from 'next/image'

import ImgCar from '../public/IMG/2.jpg'

const Cards = styled.div`
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    display: flex;
    margin-top: 1rem;
   
`;

const Fila = styled.div`
    margin-top: 1px;
    
`;


const Cars = () => {
    return (
        <>
            <Cards>
                <div className='row'>
                    <div className='col'>
                        <Card style={{ width: '15rem', height: '19rem' }}>
                            <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />
                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '15rem', height: '19rem' }}>
                            <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />
                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '15rem', height: '19rem' }}>
                            <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />

                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col'>
                        <Card style={{ width: '15rem', height: '19rem' }}>
                            <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />

                            <Card.Body>
                                <Card.Title>{"AUTO"}</Card.Title>
                                <Card.Text>
                                    {"DescripcionDeAuto"}
                                </Card.Text>
                                <Button variant="primary">Precios</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <Fila>
                        <div className='row'>
                            <div className='col'>
                                <Card style={{ width: '15rem', height: '19rem' }}>
                                    <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />

                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card style={{ width: '15rem', height: '19rem' }}>
                                    <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />

                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card style={{ width: '15rem', height: '19rem' }}>
                                    <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />

                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className='col'>
                                <Card style={{ width: '15rem', height: '19rem' }}>
                                    <CardImg variant="top" src="/../public/IMG/3.jpg" width="500px" height="400px" />

                                    <Card.Body>
                                        <Card.Title>{"AUTO"}</Card.Title>
                                        <Card.Text>
                                            {"DescripcionDeAuto"}
                                        </Card.Text>
                                        <Button variant="primary">Precios</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Fila>
                </div>
            </Cards>

        </>
    )
}

export default Cars
