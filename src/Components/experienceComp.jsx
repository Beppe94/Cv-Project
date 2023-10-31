function ExperienceForm({data, handleExperience}) {

    const handleName = (e) => {
        if(e.target.placeholder === 'Company Name') {
            handleExperience({...data, companyName: e.target.value})
        } else if(e.target.placeholder === 'Position') {
            handleExperience({...data, position: e.target.value})
        } else if(e.target.placeholder === 'Starting Date') {
            handleExperience({...data, startingDate: e.target.value})
        }
    }

    

    return (
        <div>
            <form>
                <input 
                type="text" 
                placeholder="Company Name"
                value={data.companyName}
                onChange={handleName}
                />
                <input 
                type="text" 
                placeholder="Position"
                onChange={handleName}
                />
                <input 
                type="date"
                placeholder="Starting Date"
                onChange={handleName}
                />
                <input 
                type="date" 
                placeholder="Ending Date"
                onChange={handleName}
                />
                <textarea 
                type="text" 
                placeholder="Role Description"
                onChange={handleName}
                />
            </form>
        </div>
    )
}

export default ExperienceForm;