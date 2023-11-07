import { useState } from "react";

function EducationForm({count, data, handleSchool, handleDegree, handleYear, addEducation, isTrue}) {
    /*
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
    */
    return (
        <>
        {Array.from({length: count}).map((_,index) => (
            <div key={index}> 
                <form onSubmit={(e) => e.preventDefault()}>
                    <input 
                    required
                    type="text"
                    placeholder="School Name"
                    value={data.school}
                    onChange={handleSchool}
                    />
                    <input 
                    required
                    type="text" 
                    placeholder="Degree"
                    value={data.degree}
                    onChange={handleDegree}
                    />
                    <input 
                    required
                    type="text" 
                    placeholder="Year"
                    value={data.year}
                    onChange={handleYear}
                    />
                    <button onClick={(e) => {addEducation(e,index)}}>Add</button>
                </form>
            </div>
        ))}
        </>
    )
}

export default EducationForm;