import ClosedForm from "./closedForm";

function Display({
    form,
    onChange,
    Form,
    arrayName,
    collapseForm,
    removeForm
}) {
    return (
        <div>
            {form.map((edu) => 
                edu.isClosed ? (
                    <ClosedForm 
                    key={edu.id}
                    onClick={collapseForm}
                    form={edu}
                    title={edu.schoolName}
                    arrayName={arrayName}
                    />
                ) : (
                    <Form
                    form={edu}
                    onChange={onChange}
                    key={edu.id}
                    save={collapseForm}
                    remove={removeForm}
                    />
                )
            )}
        </div>
    )
}

export default Display;