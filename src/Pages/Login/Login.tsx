import { Link } from "react-router-dom";
import InputText from "../../Components/InputText/InputText";
import { LinkContainer, LoginContainer } from "./Login.styles";
import Button from "../../Components/Button/Button";

const Login = () => {
    return(
        <LoginContainer>
            <InputText typeInput="email" placeText="exampleemail@example.com" textLabel="Email" nameLabel="email" />
            <InputText typeInput="password" placeText="Password..." textLabel="Password" nameLabel="password" />
            <Button textButton="Login"/>
            <LinkContainer>
                <Link to="/register">Do not have an account? Click here!</Link>
            </LinkContainer>
        </LoginContainer>
    )
}

export default Login;