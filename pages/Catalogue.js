import React, { useState, useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CardCar from '../components/CardCar';
import ModalCar from '../components/Modal/ModalCar';
import carsContext from '../context/CarsProvider'; 
import { Title } from '../styles/pages/CatalogueStyle';

const carsEndpoint = [
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
];

const Catalogue = () => {
    const { cars, setCars } = useContext(carsContext);
    const [show, setShow] = useState(false);
    const [selectedCar, setSelectedCard] = useState({
      title: '',
      description: '',
      precio: '',
      anio: '',
      image: '',
    });

    useEffect(() => {
      setCars(carsEndpoint);
    }, [])
    
    const handleClose = () => setShow(false);
    const handleShow = (auto) => {
        setSelectedCard(auto);
        setShow(true);
    };

    return (
        <>
            <Container>
                <Row>
                    {
                        cars?.length ?
                          cars.map(auto => (
                            <CardCar car={auto} handleShow={handleShow} />
                          ))
                        :
                          <Row className='justify-content-center'>
                            <Col xs={10} sm={6}>
                              <Title className='text-center'>
                                No hay vehiculos para mostrar
                              </Title>
                            </Col>
                          </Row>
                    }
                </Row>
            </Container>
            <ModalCar
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                selectedCar={selectedCar}
            />
        </>
    )
}

export default Catalogue;
