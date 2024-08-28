import { styled } from "styled-components";
import * as Colors from "../../Constants/Colors";

export const VacanciesContainerWork = styled.div``;

export const VacanciesContainerHiring = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardContianer = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    .trashIcon{
        font-size: 1.4rem;
        color: ${Colors.primaryColor};
        cursor: pointer;
    }
`;