function ExpandSection({
    isOpen, 
    setOpen, 
    sectionName}) {

    return (
        <button
        onClick={() => setOpen(isOpen ? 'open' : sectionName)}
        >
            {sectionName} ^
        </button>
    );
}

export default ExpandSection;