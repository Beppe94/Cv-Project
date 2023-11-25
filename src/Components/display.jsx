function Display({
    data,
    Form
}) {
    return (
        <div>
            {data.map((edu) => 
            <Form
            form={edu}
            />)}
        </div>
    )
}

export default Display;