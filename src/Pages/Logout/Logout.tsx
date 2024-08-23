import { Container, Icon, TextDisconect } from './Logout.styles';
import icon from '../../Assets/icon.png';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contexts/Account';
import { Navigate } from 'react-router';

const Logout = () =>{

    const {setUser, setIsLogged, setInterest} = useContext(Context);
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(()=>{
        setUser({
            username: "",
            email: "",
            password: "",
            interest: "",
        });
        setInterest("");
        setIsLogged(false);
        setTimeout(()=>{
            setRedirect(true);
        }, 5500);
    },[])

    if(redirect){
        return <Navigate to="/"/>
    }

    return(
        <Container>
            <Icon src={icon}/>
            <TextDisconect>Disconnecting your account</TextDisconect>
        </Container>
    )
}

export default Logout;