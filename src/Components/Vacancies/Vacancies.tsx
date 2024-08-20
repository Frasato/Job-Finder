import { VacanciesType } from "../../@Types/VacanciesType";
import { CompanyName, Description, VacanciesCard, VacanciesContainer, VacanciesTitle, Wage } from "./Vacancies.styles";

const Vacancies = (Props: VacanciesType) =>{
    return(
        <VacanciesContainer>
            <VacanciesCard>
                <div>
                    <VacanciesTitle>{Props.vacanciesTitle}</VacanciesTitle>
                    <CompanyName>{Props.companyName}</CompanyName>
                    <Description>{Props.description}</Description>
                </div>
                <Wage>{Props.wage}</Wage>
            </VacanciesCard>
        </VacanciesContainer>
    )
}

export default Vacancies;