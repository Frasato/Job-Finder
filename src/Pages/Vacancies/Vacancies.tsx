import { Navigate, useParams } from "react-router";
import { VacanciesBody, ContentBody, Head, Body, VacanciesTitle, CompanyName, Description, Wage, ImageUrlBanner, ImageContainer } from "./Vacancies.styles";
import NavBar from "../../Components/NavBar/NavBar";
import { VacanciesType } from "../../@Types/VacanciesType";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import Load from "../../Components/Load/Load";

const Vacancies = () =>{
    
    const [newVacanciesItems, setNewVacanciesItems] = useState<VacanciesType>();
    const [load, setLoad] = useState<boolean>(false);
    const {id} = useParams();
    
    useEffect(()=>{
        setLoad(true);
        const getVacancie = async() =>{
            try{
                const dbRef = ref(db, `vacancies/${id}`);
                const response = await get(dbRef);
                
                let vacanciesModel = {};

                if(response.exists()){
                    const responseValue = response.val();
                    vacanciesModel = {
                        vacanciesTitle: responseValue.title,
                        companyName: responseValue.companyname,
                        description: responseValue.description,
                        wage: responseValue.wage,
                        img: responseValue.img,
                    }
                    setNewVacanciesItems(vacanciesModel);
                }else{
                    return <Navigate to="*" />
                }
            }catch(err){
                console.error(err);
            }
        }

        getVacancie();
        setLoad(false);
    },[])

    return(
        <>
            <NavBar />
            {load == true && <Load />}
            <VacanciesBody>
                {load == false &&
                    <ContentBody>
                        <ImageContainer>
                            <ImageUrlBanner src={newVacanciesItems?.img}/>
                        </ImageContainer>
                        <Head>
                            <VacanciesTitle>{newVacanciesItems?.vacanciesTitle}</VacanciesTitle>
                            <CompanyName>{newVacanciesItems?.companyName}</CompanyName>
                        </Head>
                        <Body>
                            <Description>Vacancies Description: {newVacanciesItems?.description}</Description>
                            <Wage>$ {newVacanciesItems?.wage}</Wage>
                        </Body>
                    </ContentBody>
                }
            </VacanciesBody>
        </>
    )
}

export default Vacancies;