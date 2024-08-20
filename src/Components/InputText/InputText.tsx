import { PropsInput } from "../../@Types/PropsInput";
import { InputComponent, InputContainer, LabelInput } from "./InputText.styles";

const InputText = (PropsInput: PropsInput) =>{
    return(
        <InputContainer>
            <div>
                <LabelInput htmlFor={PropsInput.nameLabel}>{PropsInput.textLabel}</LabelInput>
                <InputComponent type={PropsInput.typeInput} placeholder={PropsInput.placeText} name={PropsInput.nameLabel}/>
            </div>
        </InputContainer>
    )
}

export default InputText;