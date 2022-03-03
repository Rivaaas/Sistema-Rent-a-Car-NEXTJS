import React from 'react'
import ChooseCar from '../components/1stStep/ChooseCar';
import ChooseCarText from '../components/1stStep/ChooseCarText';
import WarrantyText from '../components/2ndStep/WarrantyText';
import WarrantyIMG from '../components/2ndStep/WarrantyIMG';
import AuctionIMG from '../components/3rdStep/AuctionIMG';
import AuctionText from '../components/3rdStep/AuctionText';
const Instructions = () => {
  return (
    <>

      <div className='container'>
        <h2>Vive La experiencia de rentar tu vehiculo con nosotros!</h2>
        <div className='row justify-content-center'>
          <div className='col-sm-6'>
            <ChooseCar />
            <WarrantyText/>
            <AuctionIMG/>
          </div>
          <div className='col-sm-6'>
            <ChooseCarText />
            <WarrantyIMG/>
            <AuctionText/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Instructions