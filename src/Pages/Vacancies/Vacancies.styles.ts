import { styled } from "styled-components";
import * as Colors from "../../Constants/Colors";

export const VacanciesBody = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentBody = styled.div`
    margin: 60px 0;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: -191px;
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
`;

export const CompanyName = styled.h2`
    font-size: 17px;
    font-weight: bold;
    color: ${Colors.darkGrayColor};
`;

export const Description = styled.p`
    text-align: center;
    margin: 0 0 20px 0;
    width: 45%;
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
`;