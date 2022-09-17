import React from "react";

interface FormComponentProps {
    children: React.ReactNode
}

const FormContent: React.FC<FormComponentProps> = ({children}) => {
    return (
        <>
            <div className="form-content">
                <form className="form-fields">
                    {children}
                </form>
            </div>
        </>
    )
}

export default FormContent;