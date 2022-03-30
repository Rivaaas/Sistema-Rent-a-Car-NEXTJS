import { useState, createContext } from 'react';
import axios from 'axios';


const CarsContext = createContext();


const CarsProvider = ({ children }) => {

    //Autos que vendran desde la API
    const [cars,setCars] = useState([])

    return (
        <CarsContext.Provider
            value={{
                //Lo que se exportara
            }}
        >
            {children}
        </CarsContext.Provider>
    )

}


export {
    CarsProvider
}

export default CarsContext
