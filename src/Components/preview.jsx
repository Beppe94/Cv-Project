function PreviewCv({data, userEducation, userExperience}) {

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
            <div className="personEducations">
                <div className="title">
                    <h2>Education</h2>
                </div>
                <div>
                    {userEducation.map((education, index) =>(
                        <div key={index}>
                            <b>School: </b>{education.schoolName} <br />
                            <b>Degree: </b> {education.degree} <br />
                            <b>Year: </b> {education.year} <br />
                            <b>Location: </b>{education.location} <br />
                        </div>
                    ))}
                </div>
            </div>
            <div className="workExperience">
                <div className="title">
                    <h2>Work Experience</h2>
                </div>
                <div>
                    {userExperience.map((experience, index) => (
                    <div key={index} className="experiences">
                        <h2>{experience.companyName}</h2>
                        <div className="workDetails">
                            <div className="workDates">
                                <p>{experience.startingDate}</p>
                                <p>{experience.endingDate}</p>
                            </div>
                            <div className="workPosition">
                                <p>{experience.role}</p>
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PreviewCv;