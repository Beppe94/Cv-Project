import {useState} from "react";
import PreviewCv from "./preview";
import PersonalDataForm from "./personalForm";
import EducationForm from "./educationComp";
import ExperienceForm from "./experienceComp";

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        fileName: '',
        fileSrc: '',
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        description: ''
    });
    
    const [inputCount, setInputCount] = useState(1)

    const [educationArray, setEducationArray] = useState([])

    const [education, setEducation] = useState({
        index: 0,
        school: '',
        degree: '',
        year: ''
    });
    
    
    const [workExperience, setWorkExperience] = useState([]);

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

    const handlePhoneNumber = (e) => {
        setPersonalInfo({...personalInfo,
        phoneNumber: e.target.value
        })
    }
    
    const handleEmail = (e) => {
        setPersonalInfo({...personalInfo,
        email: e.target.value
        })
    }
    
    const handleDescription = (e) => {
        setPersonalInfo({...personalInfo,
        description: e.target.value
        })
    }

    const handleSchoolName = (e) => {
        setEducation({...education,
        index: +1,
        school: e.target.value
        })
    }

    const handleSchoolDegree = (e) => {
        setEducation({...education,
        degree: e.target.value
        })
    }

    const handleSchoolYear = (e) => {
        setEducation({...education,
        year: e.target.value
        })
    }

    function handleEditEducation(index) {
        const updateEducation = education.slice()

        setEducationArray([{...education, educationArray}])
    }

    const handleAddEducation = () => {
        
        setEducationArray([{...education, educationArray}])
        setInputCount(inputCount +1)
    }

    function handleDelete(index) {
        
        const updateExperience = workExperience.slice();
        updateExperience.splice(index, 1);

        setWorkExperience(updateExperience);
    }


    return (
        <div className="App">
            <div className="userInputData">
                <PersonalDataForm 
                data={personalInfo}
                handleName={personName}
                handleSurname={personSurname}
                uploadImage={uploadImage}
                handlePhoneNumber={handlePhoneNumber}
                handleEmail={handleEmail}
                handleDescription={handleDescription}
                />
                <div>
                    <h2>Education</h2>
                    <EducationForm
                    count={inputCount}
                    data={educationArray}
                    handleSchool={handleSchoolName}
                    handleDegree={handleSchoolDegree}
                    handleYear={handleSchoolYear}
                    addEducation={handleAddEducation}
                    edit={handleEditEducation}
                    />
                </div>
                <div>
                    <h2>Work Experience</h2>
                    <ExperienceForm
                    data={workExperience}
                    handleExperience={setWorkExperience}
                    />
                </div>
            </div>
            <div>
                <PreviewCv 
                data={personalInfo}
                userEducation={education}
                userExperience={workExperience}
                handleDelete={handleDelete}
                />
            </div>
        </div>
    )
}

export default App