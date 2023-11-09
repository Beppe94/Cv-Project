function PersonalDataForm({
    data, 
    uploadImage,
    handleName, 
    handleSurname,
    handlePhoneNumber,
    handleEmail,
    handleDescription}) {

    return (
        <div className="personalInfo">
            <h2>Personal Information</h2>

            <div className="personName">
                <input
                required
                maxLength={15}
                type="text" 
                placeholder="Name"
                value={data.name}
                onChange={handleName}
                />
                <input
                required
                maxLength={15}
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
                <input
                required
                type="number" 
                placeholder="Phone Number"
                value={data.phoneNumber.slice(0, 14)}
                onChange={handlePhoneNumber}
                />
                <input
                required
                type="email" 
                placeholder="Example@gmail.com"
                value={data.email}
                onChange={handleEmail}
                />
            </div>
            <div>
                <textarea 
                name="description"
                cols={40}
                rows={10}
                value={data.description}
                placeholder="Talk about yourself"
                onChange={handleDescription}>
                </textarea>
            </div>
        </div>
    )
}

export default PersonalDataForm