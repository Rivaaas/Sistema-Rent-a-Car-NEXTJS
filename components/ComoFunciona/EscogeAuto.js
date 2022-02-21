import React from 'react';
import styled from 'styled-components'
import image from 'next/image';


export const imgChooseCar = styled.div`
        background-color: aqua;
        color:aqua;
    `;
 


const EscogeAuto = () => {


    
    return (
        <>
            <div className='container'>
                <h1>Vive La experiencia de rentar tu vehiculo con nosotros!</h1>
                <div className='row mt-3'>
                    <imgChooseCar>
                    <h1>sadf</h1>
                    </imgChooseCar>
                </div>
            </div>
        </>
    )
}

export default EscogeAuto