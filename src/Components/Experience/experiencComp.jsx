import ExperienceForm from "./experienceForm";
import Display from "../display";
import ExpandSection from "../expandSection";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/experiences.css"

function ExperienceSection({
    data, isOpen,
    setOpen, createForm,
    onChange, collapseForm, removeForm}) {

    const plus = <FontAwesomeIcon icon={faPlus}/>

    return (
        <div className="experienceStyle">
            <ExpandSection 
            sectionName="Experience"
            setOpen={setOpen}
            isOpen={isOpen}
            />
            <div className={`section ${isOpen ? "open" : ""}`}>
                <Display 
                form={data}
                Form={ExperienceForm}
                onChange={onChange}
                arrayName="experiences"
                collapseForm={collapseForm}
                removeForm={removeForm}
                />
                <div className="addForm">
                    <button onClick={createForm}>
                        <h2>{plus} Experience </h2>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection