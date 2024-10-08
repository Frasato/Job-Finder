import {styled} from "styled-components";
import * as Colors from "../../Constants/Colors";

export const VacanciesContainer = styled.div`
    padding: 20px;
`;

export const VacanciesCard = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.whiteColor};
    border-radius: 10px;
    box-shadow: ${Colors.boxShadowStyle};
    padding: 10px;

    @media screen and (min-width: 768px){
        justify-content: space-between;
    }
`;

export const VacanciesTitle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: ${Colors.primaryColor};
`;

export const CompanyName = styled.h2`
    font-weight: bold;
    color: ${Colors.secundaryColor};
`;

export const Description = styled.p`
    color: ${Colors.lightGrayColors};
`;

export const Wage = styled.h3``;