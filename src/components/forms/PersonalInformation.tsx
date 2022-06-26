import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormPageProps from "../../interfaces/FormPageProps";
import Autocomplete from "../input/Autocomplete";
import TextInput from "../input/TextInput";

const PersonalInformation: React.FC<FormPageProps> = ({onComplete, register, watch}) => {
    //const {control, register, handleSubmit, watch, formState: { errors }} = useForm();
    const onSubmit = (data: any) => console.log(data)

    console.log(watch('email'))

    return (
        <form >
            <input {...register("email", {required: true })}></input>
            <input {...register("firstName", {required: true })}></input>
            <input {...register("lastName", {required: true })}></input>
        </form>
    )
}

export default PersonalInformation;