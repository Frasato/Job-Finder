import { keyframes, styled } from "styled-components";

const opacityAnimation = keyframes`
    0%{
        opacity: 1;
    }50%{
        opacity: 0;
    }100%{
        opacity: 0.9;
    }
`;

export const Container = styled.div`
    height: 100vh;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const Icon = styled.img`
    width: 70%;
    animation: ${opacityAnimation} 4s infinite;
`;

export const TextDisconect = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 100%;
`;