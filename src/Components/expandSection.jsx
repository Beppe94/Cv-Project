import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import './styles/expandSection.css'

function ExpandSection({
    isOpen, 
    setOpen, 
    sectionName}) {

    const up = <FontAwesomeIcon icon={faChevronUp} />
    const cap = <FontAwesomeIcon icon={faGraduationCap}/>
    const brief = <FontAwesomeIcon icon={faBriefcase} />

    return (
        <button className="button"
        onClick={() => setOpen(isOpen ? 'open' : sectionName)}
        >
            <h2>
                {sectionName === 'Education' ? cap : brief}
                {sectionName}
            </h2>
                
            <i className={isOpen ? 'up' : 'down'}>{up}</i>
        </button>
    );
}

export default ExpandSection;