function PersonalDataForm({data,uploadImage,handleName, handleSurname}) {

    return (
        <div>
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
            <label htmlFor="file" id="fileImage">
                {data.fileName ? data.fileName : "Choose an image"}
            </label>
            <input 
            type="file" 
            id="file"
            accept="image/*"
            onChange={uploadImage}
            />
        </div>
    )
}

export default PersonalDataForm