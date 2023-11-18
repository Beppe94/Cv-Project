import { useState } from "react";

function EducationForm({
    count, data, 
    handleEdit, handleSchool, 
    handleDegree, handleYear,
    handleDelete, addEducation}) {
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
    
    const [changeButton, setChandeButton] = useState(Array().fill(false));

    const handleSubmit = (e, index) => {
        e.preventDefault();

        if(data.length === index) {
            return
        } else {
            const updatedChandeButton = [...changeButton]
            updatedChandeButton[index] = true
            setChandeButton(updatedChandeButton)
        }
    }

    return (
        <div className="inputWrap">
        {count.map((key,index) => (
            <div key={index} className="inputForm"> 
                <form onSubmit={(e) => handleSubmit(e, key)}>
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
                    placeholder="Degree Title"
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
                    {changeButton[index] ? (
                        <button onClick={(e) => 
                            {handleEdit(e,index)}}>Edit</button>
                        ) : (
                        <button onClick={(e) => 
                            {addEducation(e)}}>Add</button>
                    )}
                    <button
                    onClick={(e) => 
                    handleDelete(e, key)}>Delete</button>
                </form>
            </div>
        ))}
        </div>
    )
}

export default EducationForm;