import { styled } from "styled-components";
import * as Colors from "../../Constants/Colors";

export const VacanciesBody = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentBody = styled.div`
    margin: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    width: 330px;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 10px;

    @media screen and (min-width: 768px){
        height: 258px;
        width: 550px;
    }

    @media screen and (min-width: 1024px){
        width: 780px;
        height: 228px;
    }

    @media screen and (min-width: 1280px){
        width: 100%;
        height: 240px;
    }
`;

export const ImageUrlBanner = styled.img``;

export const Head = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 40px 0;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const VacanciesTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: ${Colors.primaryColor};

    @media screen and (min-width: 768px){
        font-size: 4rem;
    }

    @media screen and (min-width: 1024px){
        font-size: 3rem;
    }

    @media screen and (min-width: 1280px){
        font-size: 2.5rem;
    }
`;

export const CompanyName = styled.h2`
    font-size: 17px;
    font-weight: bold;
    color: ${Colors.darkGrayColor};

    @media screen and (min-width: 768px){
        font-size: 30px;
    }

    @media screen and (min-width: 1024px){
        font-size: 23px;
    }

    @media screen and (min-width: 1280px){
        font-size: 17px;
    }
`;

export const Description = styled.p`
    font-size: 1rem;
    text-align: center;
    margin: 0 0 20px 0;
    width: 95%;

    @media screen and (min-width: 768px){
        width: 90%;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1024px){
        width: 75%;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1280px){
        width: 55%;
        font-size: 1.2rem;
    }
`;

export const Wage = styled.h3`
    width: 100px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 19px;
    font-weight: bold;
    color: ${Colors.darkGrayColor};
    box-shadow: ${Colors.boxShadowStyle};

    @media screen and (min-width: 768px){
        width: 150px;
        font-size: 30px;
    }
`;