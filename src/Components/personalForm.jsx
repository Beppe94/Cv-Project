function PersonalDataForm({
    data, 
    handleName, 
    handleSurname,
    handlePhoneNumber,
    handleEmail,
    handleDescription}) {

    return (
        <div className="personalInfo">
            <h2>Personal Information</h2>

            <div className="personName">
                <h2>Name</h2>
                <input
                required
                maxLength={15}
                type="text" 
                placeholder="Name"
                value={data.name}
                onChange={handleName}
                />
                <h2>Surname</h2>
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
                <h2>Phone Number</h2>
                <input
                required
                type="number" 
                placeholder="Phone Number"
                value={data.phoneNumber.slice(0, 14)}
                onChange={handlePhoneNumber}
                />
                <h2>Email</h2>
                <input
                required
                type="email" 
                placeholder="Example@gmail.com"
                value={data.email}
                onChange={handleEmail}
                />
            </div>
            <div>
                <h2>Description</h2>
                <textarea 
                name="description"
                cols={30}
                rows={5}
                value={data.description}
                placeholder="Tell us about yourself"
                onChange={handleDescription}>
                </textarea>
            </div>
        </div>
    )
}

export default PersonalDataForm