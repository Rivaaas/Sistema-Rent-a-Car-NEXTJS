import React from 'react'
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
// import {Inputdate} from '../../styles/pages/VehicleReceiptStyle';

export const Inputdate = styled.input`
    padding: 0px;
    margin: 1px;
    font-family: sans-serif;
    background-color: #20BFDE;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size:1.5rem;
`;



const FormVehicleReceipt = () => {
    return (
        <>
            
            <div className='d-flex flex-column mt-5 '>
                    
                    <Form>

                        <h3>Nombre Cliente y/o Numero de contrato</h3>
                        <Form.Control type="email" placeholder="DESPLEGAR LISTA DE TODOS LOS CLIENTES CON CONTRATO ACTIVO" />

                        <h3>Fecha recepción</h3>
                        <Inputdate type="date" placeholder="Ingrese RUN" />

                        <h3>Kilometraje</h3>
                        <Form.Control type="password" placeholder="KM" />

                        <h3>Correo</h3>
                        <Form.Control type="password" placeholder="Correo electronico para enviar copia (pdf) de vehiculo devuelto" />

                        <h3>Estado de vehiculo</h3>
                        <Form.Control as="textarea" rows={3} />

                        <br />
                        {/* <Button variant="info" width="">Devoler Vehiculo</Button> */}
                    </Form>
                
            </div>
            
        </>
    )
}

export default FormVehicleReceipt
