import { keyframes, styled } from "styled-components";
import * as Colors from "../../Constants/Colors";

const DotAnimation = keyframes`
    0%{
        transform: translateY(0);
    }25%{
        transform: translateY(-60px);
    }50%{
        transform: translateY(10px);
    }75%{
        transform: translateY(-5px);
    }100%{
        transform: translateY(1px);
    }
`;

export const LoadContainer = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .dotLoad1{
        font-size: 2rem;
        color: ${Colors.darkGrayColor};
        animation: ${DotAnimation} 1s ease-in-out infinite;
    }
    
    .dotLoad2{
        font-size: 2rem;
        color: ${Colors.darkGrayColor};
        animation: ${DotAnimation} 1s ease-in-out 150ms infinite;
    }
    
    .dotLoad3{
        font-size: 2rem;
        color: ${Colors.darkGrayColor};
        animation: ${DotAnimation} 1s ease-in-out 300ms infinite;
    }
`;