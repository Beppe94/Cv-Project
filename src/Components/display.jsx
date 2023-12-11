import ClosedForm from "./closedForm";
import './styles/display.css'

function Display({
    form,
    onChange,
    Form,
    arrayName,
    collapseForm,
    removeForm
}) {
    return (
        <div className="displayEducation">
            {form.map((data) => 
                data.isClosed ? (
                    <ClosedForm 
                    key={data.id}
                    onClick={collapseForm}
                    form={data}
                    title={data.schoolName || data.companyName}
                    arrayName={arrayName}
                    />
                ) : (
                    <Form
                    form={data}
                    onChange={onChange}
                    key={data.id}
                    save={collapseForm}
                    remove={removeForm}
                    />
                )
            )}
        </div>
    )
}

export default Display;