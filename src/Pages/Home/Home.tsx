import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Vacancies from "../../Components/Vacancies/Vacancies";
import { TitleHome, SubTitleHome, HomeContainer, HiringTitle, VacanciesContainer } from "./Home.styles";
import { VacanciesContext } from "../../Contexts/VacanciesContext";
import Separator from "../../Components/Separator/Separator";

const Home = () =>{

    const {vacanciesItems} = useContext(VacanciesContext);

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
                {vacanciesItems.map((items, index)=>{
                    return(
                        <VacanciesContainer key={index}>
                            <Vacancies vacanciesTitle={items.vacanciesTitle} companyName={items.companyName} description={items.description} wage={`$${items.wage}`} />
                        </VacanciesContainer>
                    )
                })}
            </HomeContainer>
        </>
    )
}

export default Home;