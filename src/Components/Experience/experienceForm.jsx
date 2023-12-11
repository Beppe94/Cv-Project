import "../styles/experienceInput.css"

function ExperienceForm(props) {
    const { companyName, role, startingDate, endingDate, description, id } = props.form
    const { onChange, save, remove } = props

    return (
        <div className="experienceInput">
            <form 
            className="sectionForm"
            id={id}
            data-array-name="experiences"
            onSubmit={(e) => e.preventDefault()}>
                <h2>Company Name</h2>
                <input type="text" 
                placeholder="Company Name"
                value={companyName}
                onChange={onChange}
                data-key="companyName"
                />
                <h2>Role</h2>
                <input type="text" 
                placeholder="Role Title"
                value={role}
                onChange={onChange}
                data-key="role"
                />
                <h2>Starting Date</h2>
                <input type="text" 
                placeholder="Starting Date"
                value={startingDate}
                onChange={onChange}
                data-key="startingDate"
                />
                <h2>Ending Date</h2>
                <input type="text" 
                placeholder="Ending Date"
                value={endingDate}
                onChange={onChange}
                data-key="endingDate"
                />
                <h2>Description</h2>
                <textarea cols="30" rows="5"
                placeholder="Describe the role you were in"
                value={description}
                onChange={onChange}
                data-key="description"
                ></textarea>

                <div className="buttonForm">
                    <button onClick={save}>Save</button>
                    <button onClick={remove}>Remove</button>
                </div>
            </form>
        </div>
    )
}

export default ExperienceForm