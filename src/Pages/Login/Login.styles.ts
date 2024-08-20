import { styled } from "styled-components";
import * as Colors from "../../Constants/Colors";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const ButtonLogin = styled.button`
    background-color: ${Colors.primaryColor};
    color: ${Colors.whiteColor};
    width: 200px;
    height: 50px;
    border-radius: 9px;
    margin: 30px 0 30px 0;
`;

export const LinkContainer = styled.div``;