import NavBar from "../../Components/NavBar/NavBar";
import Vacancies from "../../Components/Vacancies/Vacancies";
import { TitleHome, SubTitleHome, HomeContainer, HiringTitle, Separator, VacanciesContainer } from "./Home.styles";

const Home = () =>{
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
                    <Separator></Separator>
                </div>
                <VacanciesContainer>
                    <Vacancies vacanciesTitle="Doctor" companyName="Hospital Health" description="Take care of our patients, apply medicines and transfer blood!" wage="$2.400,00" />
                </VacanciesContainer>
            </HomeContainer>
        </>
    )
}

export default Home;