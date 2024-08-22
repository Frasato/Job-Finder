import React, { createContext, useState } from "react";
import { LoginType } from "../@Types/LoginType";

const Context = createContext<{
    username: LoginType | undefined;
    setUser: React.Dispatch<React.SetStateAction<LoginType | undefined>>;
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    interest: string;
    setInterest: React.Dispatch<React.SetStateAction<string>>;
}>({
    username: undefined,
    setUser: () => {},
    isLogged: false,
    setIsLogged: () => {},
    interest: '',
    setInterest: () => {},
});

const AuthProvider = ({children} : {children: React.ReactNode}) =>{
    
    const [isLogged, setIsLogged] = useState<boolean>(true);
    const [interest, setInterest] = useState<string>('Hire');
    const [username, setUser] = useState<LoginType>();

    return(
        <Context.Provider value={{
                    username,
                    setUser,
                    isLogged,
                    setIsLogged,
                    interest,
                    setInterest
                }}>
            <>{children}</>
        </Context.Provider>
    )
}

export {Context};
export default AuthProvider;