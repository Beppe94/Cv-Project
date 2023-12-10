import {useState} from "react";
import PreviewCv from "./preview";
import PersonalDataForm from "./personalForm";
import EducationSection from "./educationComp";
import ExperienceForm from "./experienceComp";
import data from './data'
import uniqid from "uniqid"
import './styles/app.css'

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

    const [workExperience, setWorkExperience] = useState([]);
    
    const [sectionOpen, setSectionOpen] = useState(null)
    
    const [sections, setSections] = useState(data.sections)

    const setOpen = (sectionName) => {
        setSectionOpen(sectionName)
    }

    function handleChange(e) {
        const {key} = e.target.dataset;
        const input = e.target.value;
        const form = e.target.closest('.sectionForm');
        const {id} = form;
        const {arrayName} = form.dataset;

        const section = sections[arrayName]; 

        setSections({...sections,
        [arrayName]: section.map((object) => {
            if(object.id === id) {
                object[key] = input;
            }
            return object;
        })})

    }

    function createForm(array, obj) {

        const section = structuredClone(sections[array])
        section.push(obj)
        setSections({...sections, [array]: section})
    }

    const educationForm = () => 
        createForm('educations', {
            schoolName: '',
            degree: '',
            year: '',
            location: '',
            isClosed: false,
            id: uniqid(),
        });
    
    function toggleForm(e, key) {
        const sectionForm = e.target.closest('.sectionForm');
        const {id} = sectionForm;
        const {arrayName} = sectionForm.dataset;
        const section = sections[arrayName];

        setSections({...sections,
            [arrayName]: section.map((edu) => {
                if(edu.id === id) {
                    edu[key] = !edu[key];
                }
                return edu;
            }),
        });
    }
    
    const collapseForm = (e) => toggleForm(e, 'isClosed');

    function removeForm(e) {
        const form = e.target.closest('.sectionForm');
        const {id} = form;
        const {arrayName} = form.dataset;
        const section = sections[arrayName];

        
        setSections({...sections,
            [arrayName]: section.filter((edu) => edu.id !== id),
        });
        
        
    }

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


    function handleDeleteWork(index) {
        
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
                    <EducationSection
                    data={sections.educations}
                    onChange={handleChange}
                    isOpen={sectionOpen === 'Education'}
                    setOpen={setOpen}
                    createForm={educationForm}
                    collapseForm={collapseForm}
                    removeForm={removeForm}
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
                userEducation={sections.educations}
                userExperience={workExperience}
                handleDelete={handleDeleteWork}
                />
            </div>
        </div>
    )
}

export default App