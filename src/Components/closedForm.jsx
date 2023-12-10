function ClosedForm(props) {
    const {title, arrayName, onClick} = props;
    const {id} = props.form

    return (
        <button 
        className="closedForm sectionForm"
        id={id}
        onClick={onClick}
        data-array-name={arrayName}
        >
            <h2>{title}</h2>
        </button>
    )
}

export default ClosedForm