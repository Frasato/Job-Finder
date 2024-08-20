import React, { createContext, useState } from "react";
import { LoginType } from "../@Types/LoginType";

const AuthContext = createContext({});

const AuthProvider = ({children} : {children: React.ReactNode}) =>{
    
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [user, setUser] = useState<LoginType>();

    return(
        <AuthContext.Provider value={{
                    user,
                    setUser,
                    isLogged,
                    setIsLogged
                }}>
            <>{children}</>
        </AuthContext.Provider>
    )
}

export default AuthProvider;