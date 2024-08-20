import { styled } from "styled-components";
import * as Colors from "../../Constants/Colors";

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    margin: 20px 0 0 0 ;
    box-shadow: 5px 15px 20px rgba(0, 0, 0, 0.06);
`;

export const LogoImage = styled.img`
    width: 10%;

    @media screen and (min-width: 768px){
        width: 4%;
    }
`;

export const ButtonsContainerDesktop = styled.div`
    width: 300px;
    height: 50px;
    display: none;
    justify-content: center;
    align-items: center;

    .buttonLogin{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 120px;
        height: 40px;
        border-radius: 10px;
        background-color: ${Colors.primaryColor};
        margin: 0 20px 0 0;
    }

    @media screen and (min-width: 768px){
        display: flex;
    }
`;

export const ButtonsContainerMobile = styled.div`
    display: block;
    .menuIcon{
        font-size: 30px;
        color: ${Colors.primaryColor};
    }

    @media screen and (min-width: 768px){
        display: none;
    }

`;

export const MenuContainer = styled.div`
    background-color: ${Colors.whiteColor};
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    filter: drop-shadow(5px 1px 20px rgba(0, 0, 0, 0.4));

    display: flex;
    flex-direction: column;
    gap: 30px;

    div{
        display: flex;
        justify-content: flex-end;
        .closeButton{
            font-size: 40px;
            margin: 20px 45px 0 0;
            color: ${Colors.primaryColor};
        }
    }

    .LinkButtons{
        font-size: 20px;
        margin: 0 0 0 20px;
        color: ${Colors.primaryColor};
    }
`;

export const ProfileImg = styled.img``;