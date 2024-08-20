import { NavContainer, LogoImage, ButtonsContainerDesktop, ButtonsContainerMobile, MenuContainer } from "./NavBar.styles";
import Logo from "../../Assets/942800.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{

    const [clicked, setClicked] = useState<boolean>(false);
    const [isLogged] = useState<boolean>(false);

    function menuLoggedOrNo(){
        if(isLogged){
            return(
                <MenuContainer>
                    <div>
                        <IoClose className="closeButton" onClick={()=> setClicked(false)}/>
                    </div>
                    <Link to="/account" className="LinkButtons">Account</Link>
                    <Link to="/logout" className="LinkButtons">Logout</Link>
                </MenuContainer>
            );
        }else{
            return(
                <MenuContainer>
                    <div>
                        <IoClose className="closeButton" onClick={()=> setClicked(false)}/>
                    </div>
                    <Link to="/login" className="LinkButtons">Login</Link>
                    <Link to="/register" className="LinkButtons">Register</Link>
                </MenuContainer>
            );
        }
    }

    return(
        <div>
            <NavContainer>
                <LogoImage src={Logo}/>
                <ButtonsContainerDesktop>
                    <Link to="/login" className="buttonLogin">Login</Link>
                    <Link to="/register" className="buttonLogin">Register</Link>
                </ButtonsContainerDesktop>
                <ButtonsContainerMobile>
                    <TiThMenu className="menuIcon" onClick={()=> setClicked(true)}/>
                </ButtonsContainerMobile>
                {clicked && menuLoggedOrNo()}
            </NavContainer>
        </div>
    )
}

export default NavBar;