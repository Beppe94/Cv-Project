function PreviewCv({data, PersonEducation, PersonExperience}) {

    const defaultImg = './src/Assets/default.png'

    return (
        <div className="resumePreview">
            <div>
                <img 
                src={data.fileSrc || defaultImg} 
                alt={data.fileName} 
                />
                <h1>{data.name} {data.surname}</h1>
            </div>
        </div>
    )
}

export default PreviewCv