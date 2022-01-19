import React from 'react'
import { Button, Form } from 'react-bootstrap';


const Formulario = () => {
    return (
        <>
            <form>
                <div className='d-flex flex-column mt-5'>
                    <h1>
                        <Form>
                            
                                <h3>Nombre</h3>
                                <Form.Control type="email" placeholder="Ingrese Nombre" />                                            
                           
                                <h3>RUN</h3>
                                <Form.Control type="password" placeholder="Ingrese RUN" />

                                <h3>Direccion</h3>
                                <Form.Control type="password" placeholder="Direccion" />
                                
                                <h3>Celular</h3>
                                <Form.Control type="password" placeholder="Numero de celular" />
                                
                                <h3>Correo</h3>
                                <Form.Control type="password" placeholder="Correo electronico" />
                                  
                            
                        </Form>
                    </h1>
                </div>
            </form>
        </>
    )
}

export default Formulario
