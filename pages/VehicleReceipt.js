import React from 'react'
import FormVehicleReceipt from '../components/Form/FormVehicleReceipt'
import { Button } from 'react-bootstrap'

const VehicleReceipt = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 centrar'>
                        <FormVehicleReceipt/>
                    </div>
                    <div className='col-sm-6 centrar mt-60%'>
                        <h1>
                            FOTO DE LOS VEHICULOS QUE SE ESTAN DEVOLVIENDO
                        </h1>
                    </div>
                    <Button variant="info" width="">Devoler Vehiculo</Button>
                </div>
            </div>
        </>
    )
}

export default VehicleReceipt
