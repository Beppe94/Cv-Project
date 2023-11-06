function PreviewCv({data, userEducation, userExperience, handleDelete, handleEdit}) {

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
                        {Object.keys(userEducation).filter(
                            key => key !== 'index').map(
                                (key) => (
                            <li key={key}>
                            <b>{key.charAt(0).toUpperCase() +
                            key.slice(1)}: </b> {userEducation[key]} <br />       
                            </li>                    
                        ))}
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