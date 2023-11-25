import ExpandSection from "./expandSection"
import EducationForm from "./educationForm"
import Display from "./display"

function EducationSection({data, isOpen, setOpen, createForm}) {

    return (
        <div>
            <ExpandSection 
            sectionName='Education'
            setOpen={setOpen}
            isOpen={isOpen}
            />
            <div className={`section ${isOpen ? 'open' : ''}`}>
                <Display 
                data={data}
                Form={EducationForm}/>
                <button onClick={createForm}>+ Education</button>
            </div>
        </div>
    )
}

export default EducationSection