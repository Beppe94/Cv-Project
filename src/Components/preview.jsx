function PreviewCv({data, userEducation, userExperience, handleDelete}) {

    const defaultImg = './src/Assets/default.png'

    return (
        <div className="resumePreview">
            <div className="personalInfoPreview">
                <div className="person">
                    <img 
                    src={data.fileSrc || defaultImg} 
                    alt={data.fileName} 
                    />
                    <div className="previewPersonName">
                        <h1>{data.name} {data.surname}</h1>
                    </div>
                </div>
                <div className="perviewPersonalData">
                    <p><b>Phone:</b> {data.phoneNumber}</p>
                    <p><b>Email:</b> {data.email}</p>
                    <div>
                        <p><b>About Me: </b> {data.description.split('\n').map((line,index) =>
                    
                        <span key={index}>
                            {line}
                            <br />  
                        </span>
                        )}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Education</h2>
                {/*
                <div> 
                    <ul>
                    {userEducation.filter(
                        education => education !== '').map(
                        (element, index) => (
                            <li key={index}>
                                {element.charAt(0).toUpperCase() + element.slice(1)}
                            </li>
                        ))}
                    </ul>
                </div>*/}
                <div>
                    <ul>
                        { userEducation.map((education, index) =>(
                            <li key={index}>
                                <b>School Name: </b>{education.schoolName} <br />
                                <b>Degree: </b> {education.degree} <br />
                                <b>Year: </b> {education.year} <br />
                                <b>Location: </b>{education.location} <br />
                                edu index: {education.id}
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
            <div>
                <h2>Experience</h2>
                <div>
                    {userExperience.map((exp, index) => (
                        <div>
                            <div key={index}>
                            <p> <b>Company Name: </b> {exp.companyName}</p>
                            <p> <b>Position: </b> {exp.position}</p>
                            <div>
                                <p> <b>Starting Date: </b> {exp.startingDate}</p>
                                <p> <b>Ending Date: </b> {exp.endingDate}</p>
                            </div>
                            <p> <b>Description: </b> {exp.roleDescription}</p>
                            
                            <button 
                            onClick={() => handleDelete(index)}
                            >Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PreviewCv;