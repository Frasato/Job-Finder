import { NavContainer, LogoImage, ButtonsContainerDesktop, ButtonsContainerMobile, MenuContainer } from "./NavBar.styles";
import Logo from "../../Assets/942800.png";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../../Contexts/Account";

const NavBar = () =>{

    const [clicked, setClicked] = useState<boolean>(false);
    const [toHome, setToHome] = useState<boolean>(false);
    const { isLogged } = useContext(Context);

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

    if(toHome){
        return <Navigate to="/"/>
    }

    return(
        <div>
            <NavContainer>
                <LogoImage src={Logo} onClick={()=> setToHome(true)}/>
                <ButtonsContainerDesktop>
                    {isLogged?
                        <>
                            <Link to="/account" className="buttonLogin">Account</Link>
                            <Link to="/logout" className="buttonLogin">Logout</Link>
                        </>
                        :
                        <>
                            <Link to="/login" className="buttonLogin">Login</Link>
                            <Link to="/register" className="buttonLogin">Register</Link>
                        </>
                    }
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