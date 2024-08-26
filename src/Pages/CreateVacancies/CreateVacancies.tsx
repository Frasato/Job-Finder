import { useContext, useState } from "react";
import InputText from "../../Components/InputText/InputText";
import NavBar from "../../Components/NavBar/NavBar";
import { ContainerCreate, CreateForm } from "./CreateVacancies.styles";
import Button from "../../Components/Button/Button";
import { VacanciesContext } from "../../Contexts/VacanciesContext";
import { Navigate } from "react-router";
import { ref, set } from "firebase/database";
import { db } from "../../firebase/firebase";
import { v4 as uuidV4 } from "uuid";

const CreateVacancies = () =>{

    const [title, setTitle] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [wage, setWage] = useState<string>('');
    const [btnClicked, setBtnClicked] = useState<boolean>(false);
    const [img, setImg] = useState<string>('');
    const {setVacanciesItems, vacanciesItems} = useContext(VacanciesContext);

    const handleTitle = (event: React.ChangeEvent<HTMLSelectElement>) => setTitle(event.target.value);
    const handleCompanyName = (event: React.ChangeEvent<HTMLSelectElement>) => setCompanyName(event.target.value);
    const handleDescription = (event: React.ChangeEvent<HTMLSelectElement>) => setDescription(event.target.value);
    const handleWage = (event: React.ChangeEvent<HTMLSelectElement>) => setWage(event.target.value);
    const handleImg = (event: React.ChangeEvent<HTMLSelectElement>) => setImg(event.target.value);

    const createDbCardVacancies = async(title: string, companyName: string, description: string, wage: string, imgurl: string) =>{
        const idV4 = uuidV4();
        const dbRef = ref(db, `/vacancies/${idV4}`);
        await set(dbRef, {
            id: idV4,
            title: title,
            companyname: companyName,
            description: description,
            wage: wage,
            img: imgurl,
        });
    }

    const create = () =>{
        if(title != '' && companyName != '' && description != '' && wage != '' && img != ''){
            const vacanciesItemModel = {
                vacanciesTitle: title,
                companyName: companyName,
                description: description,
                wage: wage,
                img: img,
            }

            createDbCardVacancies(title, companyName, description, wage, img);
    
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
                    textLabel="Image URL"
                    nameLabel="imgaurl"
                    placeText="https://imageurl.com.br"
                    valueInput={img}
                    onChangeInput={handleImg}
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