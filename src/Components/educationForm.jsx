function EducationForm(props) {

    const {schoolName, degree, year, location, id} = props.form;
    const {onChange, save, remove} = props;

    return (
        <form
            className="sectionForm"
            id={id}
            data-array-name='educations'
            onSubmit={(e) => e.preventDefault()}
        >
            <h2>School</h2>
            <input 
            type="text" 
            placeholder="School Name"
            value={schoolName}
            onChange={onChange}
            data-key="schoolName"
            />
            <h2>Degree</h2>
            <input type="text" 
            placeholder="Degree"
            value={degree}
            onChange={onChange}
            data-key="degree"
            />
            <h2>Date</h2>
            <input 
            type="text" 
            placeholder="Degree's conseguition year"
            value={year}
            onChange={onChange}
            data-key="year"
            />
            <h2>Location</h2>
            <input 
            type="text" 
            placeholder="School Location"
            value={location}
            onChange={onChange}
            data-key="location"
            />
            <button onClick={save}>Save</button>
            <button onClick={remove}>Remove</button>
        </form>
    )
}

export default EducationForm