import { useContext, useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Vacancies from "../../Components/Vacancies/Vacancies";
import { TitleHome, SubTitleHome, HomeContainer, HiringTitle, VacanciesContainer, VacanciesList } from "./Home.styles";
import { VacanciesContext } from "../../Contexts/VacanciesContext";
import Separator from "../../Components/Separator/Separator";
import { Link } from "react-router-dom";
import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import Load from "../../Components/Load/Load";
import { VacanciesType } from "../../@Types/VacanciesType";

const Home = () =>{

    const {vacanciesItems, setVacanciesItems} = useContext(VacanciesContext);
    const [load, setLoad] = useState<boolean>(false);

    useEffect(()=>{
        setLoad(true);
        const getAllVacancies = async() =>{
            try{
                const dbRef = ref(db, "/vacancies/");
                const response = await get(dbRef);

                const newVacancies: VacanciesType[] = [];

                response.forEach((vacancie)=>{
                    const childrenVacancie = vacancie.val()
                    const vacanciesModel = {
                        id: childrenVacancie.id,
                        vacanciesTitle: childrenVacancie.title,
                        companyName: childrenVacancie.companyname,
                        description: childrenVacancie.description,
                        wage: childrenVacancie.wage,
                    }
                    newVacancies.unshift(vacanciesModel);
                });

                setVacanciesItems(newVacancies);
                setLoad(false);
            }catch(err){
                console.error(err);
            }
        }

        getAllVacancies();
    },[setVacanciesItems]);

    return(
        <>
            <NavBar />
            <HomeContainer>
                <div className="textContainer">
                    <TitleHome>READY FOR WORK?</TitleHome>
                    <SubTitleHome>+100k jobs for you!</SubTitleHome>
                </div>
                <div className="VacanciesContainerDiv">
                    <HiringTitle>Companies Hiring</HiringTitle>
                    <Separator />
                </div>
                <VacanciesList>
                    {!load && vacanciesItems.map((items, index)=>{
                        return(
                            <Link to={`/vacancies/${items.id}`}>
                                <VacanciesContainer key={index}>
                                    <Vacancies vacanciesTitle={items.vacanciesTitle} companyName={items.companyName} description={`${items.description.slice(0, 45)}...`} wage={`$${items.wage}`} />
                                </VacanciesContainer>
                            </Link>
                        )
                    })}
                </VacanciesList>
                {load && <Load />}
            </HomeContainer>
        </>
    )
}

export default Home;