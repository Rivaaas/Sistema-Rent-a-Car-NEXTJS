import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <Form>
        <div className='d-flex justify-content-center mt-4'>
          <Form.Group className="mb-6 w-50 " >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="email" placeholder=" " />
          </Form.Group>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <Form.Group className=" w-50 " >
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="email" placeholder=" " />
          </Form.Group>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <Form.Group className=" w-50 " >
            <Form.Label>Numero de celular </Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <Form.Group className=" w-50 " >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder=" " />
          </Form.Group>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <Form.Group className=" w-50 " >
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="email" placeholder=" " />
          </Form.Group>
        </div>


        <div className='d-flex justify-content-center mt-3'>
          <Button variant="primary" type="submit">
            Solicitar Auto!
          </Button>

        </div>
      </Form>
    </>
  )
}

export default Contact