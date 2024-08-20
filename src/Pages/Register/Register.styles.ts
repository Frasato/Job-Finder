import { styled } from "styled-components";
import * as Colors from "../../Constants/Colors";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .SelectContainer{
        display: flex;
        flex-direction: column;
    }
`;

export const LinkContainer = styled.div``;

export const LabelSelect = styled.label`
    color: ${Colors.lightGrayColors};
    font-size: 22px;
`;

export const SelectList = styled.select`
    border: 1px solid ${Colors.lightGrayColors};
    width: 300px;
    height: 60px;
    border-radius: 10px;
    padding: 3px;
    margin-top: 5px;
    font-size: 20px;
    color: ${Colors.lightGrayColors};

    .optionItem{
        font-size: 19px;
    }
`;