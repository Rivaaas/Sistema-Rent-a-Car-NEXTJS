import React from 'react'
import { Form } from 'react-bootstrap';
import styled from 'styled-components';


const Inputdate = styled.input`
    width: 11rem;
    height: 4rem;
    font-size: 20px;
    
     
`;



const FormVehicleReceipt = () => {
    return (
        <>
            <form>
                <div className='d-flex flex-column mt-5'>
                    <h1>
                        <Form>

                            <h3>Nombre Cliente</h3>
                            <Form.Control type="email" placeholder="DESPLEGAR LISTA DE TODOS LOS CLIENTES CON CONTRATO ACTIVO" />

                            <h3>Fecha recepción</h3>
                            <Inputdate type="date" placeholder="Ingrese RUN" />

                            <h3>Estado de vehiculo</h3>
                            <Form.Control as="textarea" rows={3} />
                            
                            <h3>Kilometraje</h3>
                            <Form.Control type="password" placeholder="Numero de celular" />

                            <h3>Correo</h3>
                            <Form.Control type="password" placeholder="Correo electronico para enviar copia (pdf) de vehiculo devuelto" />

                        </Form>
                    </h1>
                </div>
            </form>
        </>
    )
}

export default FormVehicleReceipt
