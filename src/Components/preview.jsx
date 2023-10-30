function PreviewCv({data, PersonEducation, PersonExperience}) {

    const defaultImg = './src/Assets/default.png'

    return (
        <div className="resumePreview">
            <div className="personalInfoPreview">
                <div className="person">
                    <img 
                    src={data.fileSrc || defaultImg} 
                    alt={data.fileName} 
                    />
                    <div className="personName">
                        <h1>{data.name} {data.surname}</h1>
                    </div>
                </div>
                <div className="personalData">
                    <p><b>Phone:</b> {data.phoneNumber}</p>
                    <p><b>Email:</b> {data.email}</p>
                </div>
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
    )
}

export default PreviewCv