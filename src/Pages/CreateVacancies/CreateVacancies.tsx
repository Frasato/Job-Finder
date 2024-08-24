import { useContext, useState } from "react";
import InputText from "../../Components/InputText/InputText";
import NavBar from "../../Components/NavBar/NavBar";
import { ContainerCreate, CreateForm } from "./CreateVacancies.styles";
import Button from "../../Components/Button/Button";
import { VacanciesContext } from "../../Contexts/VacanciesContext";
import { Navigate } from "react-router";
import { ref, set } from "firebase/database";
import { db } from "../../firebase/firebase";

const CreateVacancies = () =>{

    const [title, setTitle] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [wage, setWage] = useState<string>('');
    const [btnClicked, setBtnClicked] = useState<boolean>(false);
    const {setVacanciesItems, vacanciesItems} = useContext(VacanciesContext);

    const handleTitle = (event: React.ChangeEvent<HTMLSelectElement>) => setTitle(event.target.value);
    const handleCompanyName = (event: React.ChangeEvent<HTMLSelectElement>) => setCompanyName(event.target.value);
    const handleDescription = (event: React.ChangeEvent<HTMLSelectElement>) => setDescription(event.target.value);
    const handleWage = (event: React.ChangeEvent<HTMLSelectElement>) => setWage(event.target.value);

    const createDbCardVacancies = async(title: string, companyName: string, description: string, wage: string) =>{
        const dbRef = ref(db, `/vacancies/${title.toLowerCase()}`);
        await set(dbRef, {
            title: title,
            companyname: companyName,
            description: description,
            wage: wage
        });
    }

    const create = () =>{
        if(title != '' && companyName != '' && description != '' && wage != ''){
            const vacanciesItemModel = {
                vacanciesTitle: title,
                companyName: companyName,
                description: description,
                wage: wage,
            }

            createDbCardVacancies(title, companyName, description, wage);
    
            setVacanciesItems([...vacanciesItems, vacanciesItemModel]);
            setBtnClicked(true);
        }else{
            window.alert("Empty Fields!")
        }
    }

    if(btnClicked){
        return <Navigate to="/account"/>
    }

    return(
        <ContainerCreate>
            <NavBar />
            <CreateForm>
                <InputText
                    typeInput="text"
                    textLabel="Vacancies Title"
                    nameLabel="vacanciestitle"
                    placeText="Junior Front-end Developer..."
                    valueInput={title}
                    onChangeInput={handleTitle}
                />
                <InputText
                    typeInput="text"
                    textLabel="Company Name"
                    nameLabel="companyname"
                    placeText="Job Finder IO"
                    valueInput={companyName}
                    onChangeInput={handleCompanyName}
                />
                <InputText
                    typeInput="text"
                    textLabel="Description"
                    nameLabel="description"
                    placeText="Create Web Site"
                    valueInput={description}
                    onChangeInput={handleDescription}
                />
                <InputText
                    typeInput="text"
                    textLabel="Wage"
                    nameLabel="wage"
                    placeText="2000"
                    valueInput={wage}
                    onChangeInput={handleWage}
                />
                <Button textButton="Create" onClick={create}/>
            </CreateForm>
        </ContainerCreate>
    )
}

export default CreateVacancies;