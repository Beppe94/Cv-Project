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
                    <h3><b>Company Name: </b>{userExperience.companyName}</h3>
                    <h4><b>Role: </b>{userExperience.position}</h4>
                    <div>
                        <h4><b>Starting Date: </b>{userExperience.startingDate}</h4>
                        <h4><b>Ending Date: </b>{userExperience.endingDate}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewCv;