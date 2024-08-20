import { Link } from "react-router-dom";
import InputText from "../../Components/InputText/InputText";
import { LabelSelect, LinkContainer, LoginContainer, SelectList } from "./Register.styles";
import Button from "../../Components/Button/Button";

const Register = () =>{
    return(
        <LoginContainer>
            <InputText typeInput="text" placeText="example name" textLabel="Username" nameLabel="username" />
            <InputText typeInput="email" placeText="exampleemail@example.com" textLabel="Email" nameLabel="email" />
            <InputText typeInput="password" placeText="Strong password" textLabel="Password" nameLabel="password" />
            <div className="SelectContainer">
                <LabelSelect>Interest</LabelSelect>
                <SelectList>
                    <option className="optionItem">I want to hire!</option>
                    <option className="optionItem">I want to work!</option>
                </SelectList>
            </div>
            <Button textButton="Register"/>
            <LinkContainer>
                <Link to="/login" className="linkButton">Already have an account? Click Here!</Link>
            </LinkContainer>
        </LoginContainer>
    )
}

export default Register;