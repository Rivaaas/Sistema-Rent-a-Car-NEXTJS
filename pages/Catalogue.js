import React, { useState, useEffect } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { Btn, Img } from '../styles/pages/CatalogueStyle';
import Image from 'next/image';
import ModalCar from '../components/Modal/ModalCar';
import Contact from '../components/Contact/Contact';
import axios from 'axios'


const Fila = styled.div`
    margin-top: 5px;
`;

const Catalogue = () => {

    const [show, setShow] = useState(false);
    const [selectedCar, setSelectedCard] = useState({
        title: '',
        description: '',
        precio: '',
        anio: '',
        image: '',
    });
    const [autos, setAutos] = useState([

    ])

    const handleClose = () => setShow(false);

    const handleShow = (auto) => {
        setSelectedCard(auto);
        setShow(true);
    };

    useEffect(() => {
        const getCars = async ()  => {
            const url = `http://localhost:1337/api/cars`;
            const {data} = await axios.get(url)
            setAutos(data.data)
        }
        getCars();
    },[])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        autos.map(auto => (
                            <div className='col-sm-3 col-12 d-flex mb-5 justify-content-center' key={auto.id}>
                                <Card style={{ width: '15rem', height: '18rem' }}>
                                    <Img className='mt-4 d-flex' src='/3.jpg' alt="" width="90%" height="90%" />

                                    <Card.Body className='mb-3 align-items-start'>
                                        <Card.Title>{auto.attributes.modelo}</Card.Title>
                                        <Card.Text>
                                            {auto.attributes.description}

                                            <h5 className='mt-2'>{auto.attributes.year}</h5>
                                        </Card.Text>

                                    </Card.Body>
                                    <Btn
                                        className=''
                                        variant="primary"
                                        onClick={() => {
                                            handleShow(auto);

                                        }}
                                    >
                                        <h2>Rentar</h2>
                                    </Btn>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <ModalCar
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                selectedCar={selectedCar}
                autos={autos}
            />
        </>
    )
}

export default Catalogue;
