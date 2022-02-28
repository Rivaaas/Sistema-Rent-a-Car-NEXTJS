import React, { useState } from 'react'

import { Button, Modal } from 'react-bootstrap';

const ModalCar = ({ handleClose, show, selectedCar }) => {


    

    return (
        <>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedCar.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{selectedCar.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="btn btn-primary" onClick={handleClose}>
                            Cerrarr
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