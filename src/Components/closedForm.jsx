function ClosedForm(props) {
    const {title, arrayName, onClick} = props;
    const {id} = props.form

    return (
        <button 
        className="sectionForm"
        id={id}
        onClick={onClick}
        data-array-name={arrayName}
        >
            {title}
        </button>
    )
}

export default ClosedForm