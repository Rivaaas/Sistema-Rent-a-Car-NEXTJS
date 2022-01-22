import React from 'react';

import Image from 'next/image';

import { Carousel } from 'react-bootstrap'


const Carousel1st = () => {
    return (
        <>
            <div className='container maxmin'>
                <div className='row'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 maxmin"
                                src="1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>MARCA + MODELO </h3>
                                <p>DESCRIPCION BREVE + KM ACTUALES</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 maxmin"
                                src="2.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>MARCA + MODELO </h3>
                                <p>DESCRIPCION BREVE + KM ACTUALES</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 maxmin"
                                src="7.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>MARCA + MODELO </h3>
                                <p>DESCRIPCION BREVE + KM ACTUALES</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

            </div>
        </>
    )
};

export default Carousel1st;
