import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";
import { emailRegex } from "../../utils/regex";
import Autocomplete from "../input/Autocomplete";
import TextInput from "../input/TextInput";

const PersonalInformation: React.FC<FormPageProps> = ({onComplete}) => {
    const {control, register, handleSubmit, watch, formState: { errors, touchedFields }} = useForm();
    const onSubmit = (data: any) => console.log(data)

    // console.log(watch('email'))
    // console.log(register)

    const isEmail = (email: string) => {
        console.log(email, 'it is')
        return emailRegex.test(email)
    }
    const emailChange = (event: any) => {
        console.log(event)
    }

    return (
        <form className="form-fields" onSubmit={() =>handleSubmit}>
            {JSON.stringify(errors )
            } {            JSON.stringify(touchedFields)}
            <h2>Personal</h2>
            <TextInput name="email" label="Email" control={control}/>
            <TextInput name="firstName" label="First Name" control={control} />
            <TextInput name="lastName" label="Last Name" control={control} />
            
            {/* <TextInput name="test" control={control}/> */}
            <a onClick={() => handleSubmit} href={blankHref}>Sub</a>
            {/* <button onClick={() => handleSubmit}>Submit</button> */}
        </form>
    )
}

export default PersonalInformation;