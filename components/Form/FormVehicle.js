import React from 'react'
import { Form } from 'react-bootstrap';


const FormVehicle = () => {
    return (
        <>
            <form>
                <div className='d-flex flex-column mt-5'>
                    <h1>
                        <Form>

                            <h3>Marca</h3>
                            <Form.Select>
                                <option>Chevrolet</option>
                                <option>Nissan</option>
                                <option>Ford</option>
                            </Form.Select>

                            <h3>Modelo</h3>
                            <Form.Select>
                                <option>SEGUN LA MARCA, SE DESPLEGARAN LOS MODELOS</option>

                            </Form.Select>

                            <h3>Patente</h3>
                            <Form.Control type="password" placeholder="AA-EE-99" />

                            <h3>Kilometraje Actual</h3>
                            <Form.Control type="password" placeholder="Numero de celular" />

                            <h3>Detalles</h3>
                            <Form.Control as="textarea" rows={3} />
                        </Form>
                    </h1>
                </div>
            </form>
        </>
    )
}

export default FormVehicle
