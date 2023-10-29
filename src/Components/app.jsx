import { useState } from "react";
import PreviewCv from "./preview";
import PersonalDataForm from "./personalForm";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        fileName: '',
        fileSrc: '',
        name: '',
        description: '',
        surname: '',
        phoneNumber: '',
        email: ''    
    });
    
    const [education, setEducation] = useState([]);
                                                    
    const [experience, setExperience] = useState([]);

    const uploadImage = (e) => {
        setPersonalInfo({...personalInfo,
            fileName: e.target.files[0].name,
            fileSrc: URL.createObjectURL(e.target.files[0])
        })
        
    }

    const personName = (e) => {
        setPersonalInfo({...personalInfo,
        name: e.target.value
        })
    }

    const personSurname = (e) => {
        setPersonalInfo({...personalInfo,
        surname: e.target.value
        })
    }

    const handleDescription = (e) => {
        setPersonalInfo({...personalInfo,
        description: e.target.value
        })
    }

    return (
        <div className="App">
            <div>
                <PersonalDataForm 
                data={personalInfo}
                handleName={personName}
                handleSurname={personSurname}
                uploadImage={uploadImage}
                handleDescription={handleDescription}
                />
            </div>
            <div>
                <PreviewCv data={personalInfo}/>
            </div>
        </div>
    )
}

export default App