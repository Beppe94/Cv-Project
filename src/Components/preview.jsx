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
            <div>
                <h2>Education</h2>
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
                </div>
            </div>
            <div>
                <h2>Work Experience</h2>
                <div>
                    {userExperience.map((exp, index) => (
                        <div>
                        <h3> <b>Company Name: </b> {exp.companyName}</h3>
                        <h3> <b>Position: </b> {exp.position}</h3>
                        <h3> <b>Starting Date: </b> {exp.startingDate}</h3>
                        <h3> <b>Ending Date: </b> {exp.EndingDate}</h3>
                        <h3> <b>Description: </b> {exp.roleDescription}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PreviewCv;