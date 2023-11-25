function EducationForm(props) {
    const {schoolName, degree, year, location, id} = props.form

    return (
        <form
            id={id}
            data-array='educations'
            onSubmit={(e) => e.preventDefault()}
        >
            <h2>School</h2>
            <input 
            type="text" 
            placeholder="School Name"
            value={schoolName}
            />
            <h2>Degree</h2>
            <input type="text" 
            placeholder="Degree"
            value={degree}
            />
            <h2>Date</h2>
            <input 
            type="text" 
            placeholder="Degree's conseguition year"
            value={year}
            />
            <h2>Location</h2>
            <input 
            type="text" 
            placeholder="School Location"
            value={location}
            />
        </form>
    )
}

export default EducationForm