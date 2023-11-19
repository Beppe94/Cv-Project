import { useEffect, useState } from "react";

function EducationForm({
    count, data, firstDel, firstEdit,
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
    const [firstButton, setFirstButton] = useState(false)
    const [changeButton, setChangeButton] = useState([]);

    const handleSubmit = (e, index) => {
        e.preventDefault();
    
        //if(data.length === 1) {
        //    setFirstButton(true)
        //} else {
        //    const newData = {...data[index+1], change: false}
        //    setChangeButton(prev => [...prev, newData])
        //}
        //console.log(index);
    }

    
    return (
        <div className="inputWrap">
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
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
                    {firstButton ? (
                        <button onClick={(e) => 
                        firstEdit(e, data)}
                        >Edit
                        </button>
                        ) : (
                        <button onClick={(e) => 
                        addEducation(e)}
                        >Add
                        </button>
                    )}
                    
                    <button
                    onClick={(e) => 
                        firstDel(e, data)}
                    >Delete
                    </button> 
                </form>
            </div>
            
            {count.map((id,index) => (
                <div key={index} className="inputForm"> 
                    <form onSubmit={(e) => handleSubmit(e, count[index+1])}>
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
                        {data ? (
                            <button onClick={(e) => 
                                {addEducation(e)}}>Add</button>
                                ) : (
                            <button onClick={(e) => 
                                {handleEdit(e, count[index +1])}}>Edit</button>
                            )}
                        <button
                        onClick={(e) => 
                        handleDelete(e, id)}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default EducationForm;