import ExpandSection from "../expandSection"
import EducationForm from "./educationForm"
import Display from "../display"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../styles/education.css'

function EducationSection({
    data, isOpen, 
    setOpen, createForm, 
    onChange, collapseForm, removeForm}) {

    const plus = <FontAwesomeIcon icon={faPlus} />

    return (
        <div className="educationStyle">
            <ExpandSection 
            sectionName="Education"
            setOpen={setOpen}
            isOpen={isOpen}
            />
            <div className={`section ${isOpen ? "open" : ""}`}>
                <Display 
                form={data}
                Form={EducationForm}
                onChange={onChange}
                arrayName="educations"
                collapseForm={collapseForm}
                removeForm={removeForm}
                />
                <div className="addEducation">
                    <button onClick={createForm}><h2>{plus} Education</h2></button>
                </div>
            </div>
        </div>
    )
}

export default EducationSection