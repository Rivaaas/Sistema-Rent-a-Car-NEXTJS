import { useState, createContext } from 'react';
import axios from 'axios';


const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    //State para guardar los datos de logIn
    const [credentials,setCredentials] = useState({
        name : "",
        email: '',
        pass : '',
        logged : false
    });



    return (
        <AuthContext.Provider
            value={{
                //Lo que se exportara
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}


export {
    AuthProvider
}

export default AuthContext

