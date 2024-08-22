import { createContext, SetStateAction, useState } from "react";
import { VacanciesType } from "../@Types/VacanciesType";

const VacanciesContext = createContext<{
    vacanciesItems: VacanciesType[];
    setVacanciesItems: React.Dispatch<SetStateAction<VacanciesType[]>>;
}>({
    vacanciesItems: [],
    setVacanciesItems: () => {},

});

const VacanciesProvider = ({children}: {children: React.ReactNode}) =>{

    const [vacanciesItems, setVacanciesItems] = useState<VacanciesType[]>([]);

    return(
        <VacanciesContext.Provider value={
            {
                vacanciesItems,
                setVacanciesItems,
            }
        }>
            {children}
        </VacanciesContext.Provider>
    )
}

export {VacanciesContext};
export default VacanciesProvider;