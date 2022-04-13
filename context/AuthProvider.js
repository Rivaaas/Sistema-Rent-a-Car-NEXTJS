import { useState, createContext } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        name : "",
        token : '',
        logged : false
    });

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

