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

export const VacanciesList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px){
        grid-template-columns: 40% 40%;
    }

    @media screen and (min-width: 1024px){
        grid-template-columns: 25% 25% 25%;
    }
`;

export const VacanciesContainer = styled.div`
    width: 100%;
    height: 100%;
`;