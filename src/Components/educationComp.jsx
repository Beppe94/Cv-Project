import { useState } from "react";

function EducationForm({data, handleEducation}) {
    const [newEducation, setNewEducation] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            if(newEducation.trim() !== '') {
                handleEducation([...data, newEducation]);            
                setNewEducation('');
            }
        } catch (typeError) {
            alert('Insert Valid Education Input');
        }
    }

    function removeEducation() {
        const updatedData = [...data.slice(0, data.length -1)];

        handleEducation(updatedData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={newEducation}
                onChange={(e) => setNewEducation(e.target.value)}
                placeholder="Add Degree / Education"
                />
                <button type="submit">
                    Add Education
                </button>
            </form>
                <button onClick={removeEducation}>Remove Education</button>
        </div>
    )
}

export default EducationForm;