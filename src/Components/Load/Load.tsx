import { GoDotFill } from "react-icons/go";
import { LoadContainer } from "./Load.styles";

const Load = () =>{
    return(
        <LoadContainer>
            <GoDotFill className="dotLoad1"/>
            <GoDotFill className="dotLoad2"/>
            <GoDotFill className="dotLoad3"/>
        </LoadContainer>
    )
}

export default Load;