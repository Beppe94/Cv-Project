import ClosedForm from "./closedForm";

function Display({
    form,
    onChange,
    Form,
    arrayName
}) {
    return (
        <div>
            {form.map((edu) => 
                edu.isClosed ? (
                    <ClosedForm 
                        form={edu}
                        title={edu.schoolName}
                        key={edu.id}
                        arrayName={arrayName}
                    />
                ) : (
                    <Form
                    form={edu}
                    onChange={onChange}
                    key={edu.id}
                    />
                )
            )}
        </div>
    )
}

export default Display;