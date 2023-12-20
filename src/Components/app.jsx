import {useState, useRef} from "react";
import PreviewCv from "./preview";
import PersonalDataForm from "./personalForm";
import EducationSection from "./Education/educationComp";
import data from '../data'
import uniqid from "uniqid"
import './styles/app.css'
import ExperienceSection from "./Experience/experiencComp";
import { useReactToPrint } from "react-to-print";

function App() {
    const [personalInfo, setPersonalInfo] = useState(data.sections.personalInfo);
    const [sectionOpen, setSectionOpen] = useState(null);
    const [sections, setSections] = useState(data.sections);
    const printRef = useRef();

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

    const experienceForm = () => 
        createForm('experiences', {
            companyName: '',
            role: '',
            startingDate: '',
            endingDate: '',
            description: '',
            isClosed: false,
            id: uniqid(),
        })
    
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

    function clear() {
        setPersonalInfo({
            name: '',
            surname: '',
            phoneNumber: '',
            email: '',
            description: ''
        });

        setSectionOpen(null);
       
        setSections({
            educations: [],
            experiences: []
        })
    }

    function loadExample() {
        setPersonalInfo(data.sections.personalInfo);

        setSections(data.sections)
    }

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: `${personalInfo.name} - ${personalInfo.surname}-Resume`,
    });

    return (
        <div className="app">
            <div className="userInputData">
                <div className="utilities">
                    <div className="clearAndLoad">
                        <button onClick={clear}>Clear All</button>
                        <button onClick={loadExample}>Load Example</button>
                    </div>
                    <button onClick={handlePrint}>Download</button>
                </div>
                <PersonalDataForm 
                data={personalInfo}
                handleName={personName}
                handleSurname={personSurname}
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
                
                    <ExperienceSection 
                    data={sections.experiences}
                    onChange={handleChange}
                    isOpen={sectionOpen === 'Experience'}
                    setOpen={setOpen}
                    createForm={experienceForm}
                    collapseForm={collapseForm}
                    removeForm={removeForm}
                    />
                </div>
            </div>
            <div ref={printRef}>
                <PreviewCv 
                data={personalInfo}
                userEducation={sections.educations}
                userExperience={sections.experiences}
                />
            </div>
        </div>
    )
}

export default App;