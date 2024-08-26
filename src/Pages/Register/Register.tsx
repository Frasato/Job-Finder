import { Link, Navigate } from "react-router-dom";
import InputText from "../../Components/InputText/InputText";
import { LabelSelect, LinkContainer, LoginContainer, SelectList } from "./Register.styles";
import Button from "../../Components/Button/Button";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { get, ref, set } from "firebase/database";
import { db } from "../../firebase/firebase";
import { Context } from "../../Contexts/Account";

const Register = () =>{

    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [interest, setInterest] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);

    const { setUser, setIsLogged } = useContext(Context);

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const userNameLowerCase = event.target.value;
        setUsername(userNameLowerCase.toLowerCase());
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
    }

    const handleInterest = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setInterest(event.target.value);
    }

    const registerUser = async(username: string, email: string, password: string, interest: string) =>{
        const dbRef = ref(db, `/users/${username.toLowerCase()}`);
        const snapshot = await get(dbRef);
        const exist = snapshot.exists();

        if(!exist){
            await set(dbRef, {
                username: username,
                email: email,
                password: password,
                interest: interest
            });
            setUser({username, email, password, interest});
            setIsLogged(true);
            setRedirect(true);
        }else{
            toast.error("Username Already Exist");
        }
    }

    if(redirect){
        return <Navigate to="/"/>
    }

    const handleRegister = () =>{
        if(username !== '' && email !== '' && password !== '' && interest !== ''){
            registerUser(username, email, password, interest);
        }else{
            toast.warn("Empty Fields!");
        }
    }

    return(
        <LoginContainer>
            <InputText 
                typeInput="text"
                placeText="example name"
                textLabel="Username"
                nameLabel="username"
                valueInput={username}
                onChangeInput={handleUsername}
            />
            <InputText
                typeInput="email"
                placeText="exampleemail@example.com"
                textLabel="Email"
                nameLabel="email"
                valueInput={email}
                onChangeInput={handleEmail}
            />
            <InputText
                typeInput="password"
                placeText="Strong password"
                textLabel="Password"
                nameLabel="password"
                valueInput={password}
                onChangeInput={handlePassword}
            />
            <div className="SelectContainer">
                <LabelSelect>Interest</LabelSelect>
                <SelectList value={interest} onChange={handleInterest}>
                    <option className="optionItem">Select your interest!</option>
                    <option className="optionItem" value="Hire">I want to hire!</option>
                    <option className="optionItem" value="Work">I want to work!</option>
                </SelectList>
            </div>
            <Button textButton="Register" onClick={handleRegister}/>
            <LinkContainer>
                <Link to="/login" className="linkButton">Already have an account? Click Here!</Link>
            </LinkContainer>
        </LoginContainer>
    )
}

export default Register;