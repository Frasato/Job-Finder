import {styled} from "styled-components";
import * as Colors from "../../Constants/Colors";

export const SeparatorElement = styled.div`
    background-color: ${Colors.primaryColor};
    width: 75%;
    height: 1px;

    @media screen and (min-width: 768px){
        width: 35%;
    }
`;