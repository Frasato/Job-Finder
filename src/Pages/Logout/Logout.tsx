import { Container, Icon } from './Logout.styles';
import icon from '../../Assets/icon.png';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contexts/Account';
import { Navigate } from 'react-router';
import Load from '../../Components/Load/Load';

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
            <Load />
        </Container>
    )
}

export default Logout;