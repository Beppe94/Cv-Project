import { useState } from "react";

function ExperienceForm({data, handleExperience}) {

    const [newExperience, setNewExperience] = useState({
        companyName: '',
        position: '',
        startingDate: '',
        endingDate: '',
        roleDescription: ''
    })

    const handleWorkSubmit = (e) => {
        e.preventDefault();

        if(e.target.placeholder === 'Company Name') {
            handleExperience({...data, 
                newExperience: {...data.newExperience,
                    companyName: newExperience.companyName}});
        } else if(e.target.placeholder === 'Position') {
            handleExperience({...data, 
                newExperience: {...data.newExperience, 
                    position: newExperience.position}});
        } else if(e.target.placeholder === 'Starting Date') {
            handleExperience({...data, 
                newExperience: {...data.newExperience, 
                    startingDate: newExperience.startingDate}});
        } else if(e.target.placeholder === 'Ending Date') {
            handleExperience({...data, 
                newExperience: {...data.newExperience, 
                    endingDate: newExperience.endingDate}});
        } else if(e.target.placeholder === 'Role Description') {
            handleExperience({...data, 
                newExperience: {...data.newExperience, 
                    roleDescription: newExperience.roleDescription}});
        }

        handleExperience([...data, newExperience])

        setNewExperience({
            companyName: '',
            position: '',
            startingDate: '',
            endingDate: '',
            roleDescription: ''
        });
    }

    return (
        <div>
            <form onSubmit={handleWorkSubmit}>
                <input
                required
                placeholder="Company Name"
                value={newExperience.companyName}
                onChange={(e) => setNewExperience({
                    ...newExperience, companyName: e.target.value})}
                />
                <input
                required
                placeholder="Position"
                value={newExperience.position}
                onChange={(e) => setNewExperience({
                    ...newExperience, position: e.target.value})}
                />
                <input
                required
                placeholder="Starting Date"
                value={newExperience.startingDate}
                onChange={(e) => setNewExperience({
                    ...newExperience, startingDate: e.target.value})}
                />
                <input
                required
                placeholder="Ending Date"
                value={newExperience.endingDate}
                onChange={(e) => setNewExperience({
                    ...newExperience, endingDate: e.target.value})}
                />
                <textarea
                required
                cols={40}
                rows={10}
                value={newExperience.roleDescription}
                placeholder="Role Description"
                onChange={(e) => setNewExperience({
                    ...newExperience, roleDescription: e.target.value})}
                />
                <button type="submit">
                    Add Experience
                </button>
            </form>
        </div>
    )
}


export default ExperienceForm;