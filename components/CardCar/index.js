import React from "react";
import { Card } from 'react-bootstrap';
import { Btn, Img } from '../../styles/pages/CatalogueStyle';

const CardCar = ({ car, handleShow }) => {
    return (
      <div className='col-sm-3 col-12 d-flex mb-5 justify-content-center' key={car.title}>
        <Card style={{ width: "15rem", height: "18rem" }}>
            <Img
                className="mt-4 d-flex"
                src="/3.jpg"
                alt=""
                width="90%"
                height="90%"
            />

            <Card.Body className="mb-3 align-items-start">
                <Card.Title>{car.title}</Card.Title>
                <Card.Text>
                    {car.description}

                    <h5 className="mt-2">{car.anio}</h5>
                </Card.Text>
            </Card.Body>
            <Btn
                className=""
                variant="primary"
                onClick={() => {
                    handleShow(car);
                }}
            >
              Rentar
            </Btn>
        </Card>
      </div>
    );
};

CardCar.defaultProps = {
    car: {
      title: '',
      description: '',
      anio: ''
    },
    handleShow: undefined
};

export default CardCar;
