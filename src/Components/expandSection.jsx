import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ExpandSection({
    isOpen, 
    setOpen, 
    sectionName}) {

    const up = <FontAwesomeIcon icon={faChevronUp} />
    const down = <FontAwesomeIcon icon={faChevronDown} />

    return (
        <button
        onClick={() => setOpen(isOpen ? 'open' : sectionName)}
        >
            {sectionName} 
            <i>{isOpen ? down : up}</i>
        </button>
    );
}

export default ExpandSection;