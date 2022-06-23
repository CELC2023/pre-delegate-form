import React from "react";
import { useForm } from "react-hook-form";
import FormPageProps from "../../interfaces/FormPageProps";
import Autocomplete from "../input/Autocomplete";
import TextInput from "../input/TextInput";

const PersonalInformation: React.FC<FormPageProps> = ({onComplete}) => {
    const {control, register, handleSubmit, watch, formState: { errors }} = useForm();
    const onSubmit = (data: any) => console.log(data)

    console.log(watch("testfield"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput label="name" />
            <input {...register("email")}></input>
            <input {...register("firstName")}></input>
            <input {...register("lastName")}></input>
           <Autocomplete name={"testfield"} label={"Hello World"} control={control} />
           <button onClick={() => onComplete()}>Complete</button>
        </form>
    )
}

export default PersonalInformation;