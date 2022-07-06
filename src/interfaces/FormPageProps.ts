import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export default interface FormPageProps {
    onComplete: () => void,
    onBack?: () => void
    register?: UseFormRegister<FieldValues>,
    watch?: UseFormWatch<FieldValues>
}