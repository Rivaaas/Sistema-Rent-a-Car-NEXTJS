import { useContext } from 'react';

import CarsContext from '../context/CarsProvider'

const useCars = () => {

    return useContext(CarsContext)

}

export default useCars