import { useContext, useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Context } from "../../Contexts/Account";
import { VacanciesContainerHiring, VacanciesContainerWork } from "./Account.styles";
import Button from "../../Components/Button/Button";
import { Navigate } from "react-router";
import Separator from "../../Components/Separator/Separator";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import { VacanciesType } from "../../@Types/VacanciesType";
import Vacancies from "../../Components/Vacancies/Vacancies";

const Account = () =>{

    const {interest, username} = useContext(Context);
    const [localVacancies, setLocalVacancies] = useState<VacanciesType[]>([]);
    const [btnClick, setBtnClick] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);

    useEffect(()=>{
        setBtnClick(false);
        setLoad(true);
        const getLocalVacancies = async() =>{

            try{

                const dbRef = ref(db, `vacancies/`);
                const responses = await get(dbRef);
                   
                const newVacancies: VacanciesType[] = [];

                responses.forEach((vacancie) => {
                    const response = vacancie.val();
                    if(response.createdBy == username?.username.toLowerCase()){
                        const vacancieModel = {
                            id: response.id,
                            vacanciesTitle: response.title,
                            companyName: response.companyname,
                            description: response.description,
                            wage: response.wage,
                        }

                        newVacancies.unshift(vacancieModel);
                    }
                });

                setLocalVacancies(newVacancies);


            }catch(err){
                console.error(err);
            }

        }

        getLocalVacancies();
        setLoad(false)
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
                    {localVacancies.length != 0?
                        localVacancies.map((item, index)=>{
                            return(
                                <Vacancies vacanciesTitle={item.vacanciesTitle} companyName={item.companyName} description={item.description} wage={item.wage} />
                            )
                        })
                        :
                        <></>
                    }
                </VacanciesContainerHiring>
            }
        </>
    )
}

export default Account;