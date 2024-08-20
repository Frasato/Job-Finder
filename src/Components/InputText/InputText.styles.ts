import { styled } from "styled-components";
import * as Colors from "../../Constants/Colors";


export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
    }
`;

export const LabelInput = styled.label`
    color: ${Colors.lightGrayColors};
    font-size: 20px;
`;

export const InputComponent = styled.input`
    border: 1px solid ${Colors.lightGrayColors};
    border-radius: 7px;
    width: 300px;
    height: 60px;
    padding: 3px;
    margin: 3px 0 20px 0;
    font-size: 19px;
`;
