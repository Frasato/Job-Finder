import React, { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = (children: React.ReactNode) =>{
    
    const [userName, setUserName] = useState<string>('');

    return(
        <AuthContext.Provider value={{userName, setUserName}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;