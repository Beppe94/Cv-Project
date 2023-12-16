import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function PreviewCv({data, userEducation, userExperience}) {

    const phone = <FontAwesomeIcon icon={faPhone} />
    const mail = <FontAwesomeIcon icon={faEnvelope} />
    const user = <FontAwesomeIcon icon={faAddressCard} />
    const dash = <FontAwesomeIcon icon={faMinus} />

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
                    <h2 className="title">Contacts</h2>
                    <div className="personInfo">
                        <p><span className="icon">{phone} {dash} </span>{data.phoneNumber}</p>
                        <p><span className="icon">{mail} {dash} </span> {data.email}</p>
                        <div>
                            <p><span className="icon">{user} {dash} </span> {data.description.split('\n').map((line,index) =>
                    
                        <span key={index}>
                                {line}
                                <br />  
                            </span>
                            )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personEducations">
                <div className="title">
                    <h2>Education</h2>
                </div>
                <div>
                    {userEducation.map((education, index) =>(
                        <div className="educations" key={index}>
                            <h2>{education.schoolName}</h2>
                            <div className="educationDetails">
                                <div className="educationDate">
                                    <p>{education.year}</p>
                                </div>
                                <div className="educationInfo">
                                    <p>{education.degree}</p>
                                    <p>{education.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="workExperience">
                <div className="title">
                    <h2>Work Experience</h2>
                </div>
                <div>
                    {userExperience.map((experience, index) => (
                    <div key={index} className="experiences">
                        <h2>{experience.companyName}</h2>
                        <div className="workDetails">
                            <div className="workDates">
                                <p>{experience.startingDate}</p>
                                <p>{experience.endingDate}</p>
                            </div>
                            <div className="workPosition">
                                <p>{experience.role}</p>
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PreviewCv;