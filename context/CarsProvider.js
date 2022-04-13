import React, { createContext } from 'react';
import { useState } from 'react';

const CarsContext = createContext({});

export const CarsProvider = ({children}) => {
  const [cars, setCars] = useState([]);

  return (
    <CarsContext.Provider value={{cars, setCars}}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContext;