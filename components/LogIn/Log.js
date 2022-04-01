import React from "react";

import { H2 } from "../../styles/pages/LogStyle";
import { Form, Button, Row } from "react-bootstrap";

const Log = () => {
  return (
    <>
      <Row className="justify-content-center">
     
          {/* <div className="col-4"></div> */}
          <div className="col-4 m-5">
            <H2>Iniciar Sesion</H2>
            <Form className="mb-5 col-md-12">
              <Form.Group>
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <a href="#">No recuerdo mi contraseña</a>
              <div>
                <Button variant="dark" type="submit" className="mt-4">
                  Entrar
                </Button>
                <hr></hr>
                <a>
                  No tienes cuenta? <a href="##">Registrate</a>{" "}
                </a>
              </div>
            </Form>
          </div>
          {/* <div className="col-4"></div> */}
      </Row>
    </>
  );
};

export default Log;
