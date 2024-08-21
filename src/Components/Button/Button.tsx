import { ButtonType } from "../../@Types/ButtonType";
import { ButtonComponent } from "./Button.styles";

const Button = (TextProps: ButtonType) =>{
    return(
        <>
            <ButtonComponent onClick={TextProps.onClick}>{TextProps.textButton}</ButtonComponent>
        </>
    )
}

export default Button;