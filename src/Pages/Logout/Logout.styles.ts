import { styled } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const Icon = styled.img`
    width: 70%;

    @media screen and (min-width: 768px){
        width: 15%;
    }
`;