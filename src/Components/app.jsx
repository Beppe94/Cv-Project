import {useState, useEffect} from "react";
import PreviewCv from "./preview";
import PersonalDataForm from "./personalForm";
//import EducationForm from "./educationComp2";
import EducationSection from "./educationComp";
import ExperienceForm from "./experienceComp";
import data from './data'
import uniqid from "uniqid"


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

    const [educationArray, setEducationArray] = useState([])
    
    const [inputCount, setInputCount] = useState([])

    const [education, setEducation] = useState([]);
    const [workExperience, setWorkExperience] = useState([]);
    
    const [sectionOpen, setSectionOpen] = useState(null)

    const [sections, setSections] = useState(data.sections)

    const setOpen = (sectionName) => {
        setSectionOpen(sectionName)
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
            id: uniqid(),
        });

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

    
    const handleAddEducation = (e) => {
        
        const form = e.target.closest('form')
        const name = form.childNodes[0].value
        const degree = form.childNodes[1].value
        const year = form.childNodes[2].value
        
        if(name === '' || degree === '' || year === '' ||
            name === ' ' || degree === ' ' || year === ' ') {
            alert('Insert Valid Education')
            return
        } else {
            const newEducation = {
                index: uniqid(),
                school: name,
                degree: degree,
                year: year,
                change: true
            }

            setEducationArray([...educationArray, newEducation])

            setInputCount(prev => [...prev, newEducation.index])
        }
    }

    const firstEdit = (e, data) => {

        console.log(data[0].index)
    }

    const handleEdit = (e, key) => {
        const form = e.target.closest('form')
        const name = form.childNodes[0].value
        const degree = form.childNodes[1].value
        const year = form.childNodes[2].value
        
/*
        setEducationArray((prevEducationArray) => {
            return prevEducationArray.map((edu) => {
                if(prevIndex === edu.index) {
                    return edu = {...edu, name: name, degree: degree, year: year}
                }
                return edu
            })
        })*/
    }
    


    const handleFirstDelete = (e, data) => {
        e.preventDefault();

        const parent = e.target.closest('form').parentNode.parentNode;

        if(parent.childNodes.length <= 1) {
            return
        }

        const removeIndex = data[0]
        
        console.log(removeIndex.index);
        const newArr = educationArray.filter(
            (element) => element.index !== removeIndex.index)
        
        setEducationArray([...newArr])
        
        e.target.closest('form').parentNode.remove()
    }

    const handleDeleteEducation = (e) => {
        e.preventDefault()

        const parent = e.target.closest('form').parentNode.parentNode;

        if(parent.childNodes.length <= 1) {
            return
        }

        const form = e.target.closest('form');
        const name = form.childNodes[0].value
        const degree = form.childNodes[1].value
        const year = form.childNodes[2].value
        
        const matchingIndex = educationArray.findIndex(edu =>
            edu.school === name &&
            edu.degree === degree &&
            edu.year === year
        );

        
        const newEduArray = educationArray.filter(
            (element) => 
            element.index !== educationArray[matchingIndex].index)
        
        setEducationArray(newEduArray)
        e.target.closest('form').parentNode.remove()
    }
    
    

    function handleDeleteWork(index) {
        
        const updateExperience = workExperience.slice();
        updateExperience.splice(index, 1);

        setWorkExperience(updateExperience);
    }

    useEffect(() => {
        console.log(sectionOpen);
    })
    

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
                    isOpen={sectionOpen === 'Education'}
                    setOpen={setOpen}
                    createForm={educationForm}
                    />
                    {/*
                    <h2>Education</h2>
                    <EducationForm
                    firstEdit={firstEdit}
                    firstDel={handleFirstDelete}
                    count={inputCount}
                    data={educationArray}
                    handleEdit={handleEdit}
                    handleSchool={handleSchoolName}
                    handleDegree={handleSchoolDegree}
                    handleYear={handleSchoolYear}
                    addEducation={handleAddEducation}
                    handleDelete={handleDeleteEducation}
                    />*/}
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