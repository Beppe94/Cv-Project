function PersonalDataForm({
    data, 
    uploadImage,
    handleName, 
    handleSurname, 
    handleDescription}) {

    return (
        <div className="personalInfo">
            <h2>Personal Information</h2>

            <div>
                <input 
                type="text" 
                placeholder="First Name"
                value={data.name}
                onChange={handleName}
                />
                <input
                type="text"
                placeholder="Surname"
                value={data.surname}
                onChange={handleSurname}
                />
            </div>
            <div>
                <label htmlFor="file" id="fileImage">
                    {data.fileName ? data.fileName : "Choose an image "}
                </label>
                <input 
                type="file" 
                id="file"
                accept="image/*"
                onChange={uploadImage}
                />
            </div>
            <div>
                <textarea 
                name="description"
                cols="40" 
                rows="10"
                value={data.description}
                placeholder="Talk about yourself"
                onChange={handleDescription}>
                </textarea>
            </div>
        </div>
    )
}

export default PersonalDataForm