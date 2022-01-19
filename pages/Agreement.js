import React from 'react'
import FormularioPersona from '../components/Form/FormPerson';
import FormularioVehiculo from '../components/Form/FormVehicle';
import { Button} from 'react-bootstrap';

const Agreement = () => {
    return (
        <>
            <div className='container'>
                <div className='row w-100 justify-content-center'>
                    <div className='col-sm-6'>
                        <FormularioPersona />
                    </div>
                    <div className='col-sm-6'>
                      <FormularioVehiculo/>
                    </div>
                   <Button className='mt-5'>Generar PDF CONTATO</Button>
                </div>
            </div>
        </>
    )
}

export default Agreement
