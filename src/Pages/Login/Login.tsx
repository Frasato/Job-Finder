import { Link, Navigate } from "react-router-dom";
import InputText from "../../Components/InputText/InputText";
import { LinkContainer, LoginContainer } from "./Login.styles";
import Button from "../../Components/Button/Button";
import { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import { get, ref } from "firebase/database";
import { Context } from "../../Contexts/Account";
import { toast } from "react-toastify";

const Login = () => {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const {setIsLogged, setUser, setInterest} = useContext(Context);

    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const userNameLoweCase = event.target.value;
        setUsername(userNameLoweCase.toLowerCase());
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const passwordState = event.target.value;
        setPassword(passwordState);
    }

    const handleLogin = async() =>{
        try{
            const dbRef = ref(db, `/users/${username}`);
            const response = await get(dbRef);
    
            if(response.exists()){
                const userData = response.val()
                if(userData.password === password){
                    setIsLogged(true);
                    setUser({
                        username: userData.username,
                        email: userData.email,
                        password: userData.password,
                        interest: userData.interest,
                    });
                    setInterest(userData.interest)
                    setRedirect(true);
                }else{
                    toast.error("Invalid Password");
                }
            }else{
                toast.warn("User doesn't exist");
            }
        }catch(error){
            console.error(error);
        }
    }

    if(redirect){
        return <Navigate to="/"/>
    }

    return(
        <LoginContainer>
            <InputText typeInput="text" placeText="Your Username" textLabel="Username" nameLabel="username" valueInput={username} onChangeInput={handleUserName}/>
            <InputText typeInput="password" placeText="Password..." textLabel="Password" nameLabel="password" valueInput={password} onChangeInput={handlePassword}/>
            <Button textButton="Login" onClick={handleLogin}/>
            <LinkContainer>
                <Link to="/register">Do not have an account? Click here!</Link>
            </LinkContainer>
        </LoginContainer>
    )
}

export default Login;