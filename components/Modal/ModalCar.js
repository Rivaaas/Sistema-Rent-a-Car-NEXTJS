import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import ContactForRent from '../../pages/ContactForRent';

const ModalCar = ({ handleClose, show, selectedCar, autos }) => {

    return (
        <>

            <div>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedCar.attributes.modelo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{selectedCar.attributes.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="btn btn-primary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="btn btn-warning" onClick={() => {
                            <ContactForRent/>
                        }}
                        >
                            Rent!
                        </Button>

                    </Modal.Footer>
                </Modal>
            
            </div>
        </>
    )
}

ModalCar.defaultProps = {
    auto: {
        title: '',
        description: '',
        precio: '',
        anio: '',
        image: '',
    }
};

export default ModalCar