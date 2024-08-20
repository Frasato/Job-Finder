import {styled} from "styled-components";
import * as Colors from "../../Constants/Colors";

export const HomeContainer = styled.div`
    height: 91.1vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .textContainer{
        margin: 60px 0;
        text-align: center;
    }

    .VacanciesContainerDiv{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const TitleHome = styled.h1`
    margin: 0 0 5px 0;
    font-size: 40px;
    font-weight: bold;
    color: ${Colors.primaryColor};
`;

export const SubTitleHome = styled.h2`
    font-size: 24px;
    color: ${Colors.secundaryColor};
`;

export const HiringTitle = styled.h3`
    color: ${Colors.primaryColor};
    font-weight: bold;
    margin: 0 0 10px 0;
`;

export const Separator = styled.div`
    background-color: ${Colors.primaryColor};
    width: 75%;
    height: 1px;

    @media screen and (min-width: 768px){
        width: 35%;
    }
`;

export const VacanciesContainer = styled.div`
    width: 100%;

    @media screen and (min-width: 768px){
        width: 60%;
    }
`;