import React from "react";
import { useForm } from "react-hook-form";
import FormPageProps from "../../interfaces/FormPageProps";
import Textarea from "../input/Textarea";

const Feedback: React.FC<FormPageProps> = ({onComplete}) => {
    const {control, register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea />
            <p>I understand that by submitting this form I am committing to sending the 3 delegates to CELC 2023 FROM UNIVERSITY OF CALGARY </p>
            <button>YES</button>
        </form>
    )
}

export default Feedback;