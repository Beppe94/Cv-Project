function ClosedForm(props) {
    const {title, arrayName} = props;
    const {id} = props.form

    return (
        <button 
        id={id}
        //onClick={onClick}
        data-array-name={arrayName}
        >
            {title}
        </button>
    )
}

export default ClosedForm