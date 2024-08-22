import { useContext, useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Context } from "../../Contexts/Account";
import { VacanciesContainerHiring, VacanciesContainerWork } from "./Account.styles";
import Button from "../../Components/Button/Button";
import { Navigate } from "react-router";
import Separator from "../../Components/Separator/Separator";

const Account = () =>{

    const {interest} = useContext(Context);
    const [btnClick, setBtnClick] = useState<boolean>(false);

    useEffect(()=>{
        setBtnClick(false);
    },[])

    if(btnClick){
        return <Navigate to="/create"/>
    }

    return(
        <>
            <NavBar />
            {interest === 'Work' &&
                <VacanciesContainerWork>
                    {/* Vagas Aplicadas */}
                </VacanciesContainerWork>
            }
            {interest === 'Hire' &&
                <VacanciesContainerHiring>
                    <Button textButton="Create" onClick={() => setBtnClick(true)}/>
                        <Separator />
                    {/* Vagas que a empresa tem em aberto */}
                </VacanciesContainerHiring>
            }
        </>
    )
}

export default Account;