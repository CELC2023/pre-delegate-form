import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectDiscord, selectFirstName, selectHeadShot, selectHeadShotUrl, selectLastName, selectLinkedin, selectResume, selectResumeUrl, selectShareResume, setFileUploads } from "../../redux/delegateReducer";
import axiosInstance from "../../utils/axios";
import { discordRegex } from "../../utils/regex";
import Checkbox from "../input/Checkbox";
import FileUpload from "../input/FileUpload";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import HeadshotIcon from "../../images/headshot-red.svg";
import ResumeIcon from "../../images/resume-red.svg";

const FileUploads: React.FC<FormPageProps> = ({onBack, onComplete}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();

    interface FileUploadsForm {
        resume: string,
        resumeFile: File | null,
        resumeUrl: string,
        headShot: string,
        headShotFile: File | null,
        headShotUrl: string,
        shareResume: boolean,
        linkedin: string,
        discord: string
    }

    const defaultResume = useSelector(selectResume);
    const defaultHeadShot = useSelector(selectHeadShot);
    const delegateFirstName = useSelector(selectFirstName);
    const delegateLastName = useSelector(selectLastName);

    const defaultValues: FileUploadsForm = {
        resume: useSelector(selectResume),
        resumeUrl: useSelector(selectResumeUrl),
        resumeFile: defaultResume !== "" ? new File([""], defaultResume) : null,
        headShot: useSelector(selectHeadShot),
        headShotFile: defaultHeadShot !== "" ? new File([""], defaultHeadShot) : null,
        headShotUrl: useSelector(selectHeadShotUrl),
        shareResume: useSelector(selectShareResume),
        linkedin: useSelector(selectLinkedin),
        discord: useSelector(selectDiscord)
    }

    const {control, watch, setValue} = useForm({defaultValues: defaultValues});

    const uploadFiles = async (resume: File | null, headShot: File | null) => {
        if(resume !== null) {
            await uploadFile(resume, 'resume').then((res) => {
                setValue("resumeUrl", res)
                setValue("resume", resume.name)
                setValue("resumeFile", new File([""], resume.name)) 
            })
        }
        if(headShot !== null) {
            await uploadFile(headShot, 'headShot').then((res) => {
                setValue("headShotUrl", res)
                setValue("headShot", headShot.name)
                setValue("headShotFile", new File([""], headShot.name)) 
            })
        }
    }
    
    const uploadFile = async (file: Blob, type: string) => {
        var bodyFormData = new FormData()
        bodyFormData.append("fileInput", file)
        bodyFormData.append("fileType", type)
        bodyFormData.append("firstName", delegateFirstName)
        bodyFormData.append("lastName", delegateLastName)
        const res = axiosInstance.post("/delegate/file", bodyFormData)
        .then((r) => {return r.data.url})
        .catch((e) => {return ""})
        return res
    }

    const validateDiscord = (value: string): boolean => {
        if (discordRegex.test(value)) {
            return true;
        }
        return false;
    }
    
    const onNext = () => {
        const resumeFile = watch('resumeFile');
        const headShotFile = watch('headShotFile');
        const discord = watch('discord');

        if (validateDiscord(discord) && resumeFile !== null && resumeFile.size > 0 && headShotFile !== null && headShotFile.size > 0) {
            uploadFiles(resumeFile, headShotFile)
            .then(() => {
                const values = {
                    headShot: watch('headShot'),
                    headShotUrl: watch('headShotUrl'),
                    resume: watch('resume'),
                    resumeUrl: watch('resumeUrl'),
                    linkedin: watch('linkedin'),
                    discord: watch('discord'),
                    shareResume: watch('shareResume')
                }
                dispatch(setFileUploads(values))
                onComplete && onComplete();
            })
        } else if(validateDiscord(discord) && watch('resumeUrl') !== "" && watch("headShotUrl") !== "") {
            const values = {
                headShot: watch('headShot'),
                headShotUrl: watch('headShotUrl'),
                resume: watch('resume'),
                resumeUrl: watch('resumeUrl'),
                linkedin: watch('linkedin'),
                discord: watch('discord'),
                shareResume: watch('shareResume')
            }
            dispatch(setFileUploads(values)) 
            onComplete && onComplete(); 
        }

    }

    const onPrevious = () => {
        const resumeFile = watch('resumeFile');
        const headShotFile = watch('headShotFile'); 
        
        uploadFiles(resumeFile, headShotFile).then(() => {
            const values = {
                headShot: watch('headShot'),
                headShotUrl: watch('headShotUrl'),
                resume: watch('resume'),
                resumeUrl: watch('resumeUrl'),
                linkedin: watch('linkedin'),
                discord: watch('discord'),
                shareResume: watch('shareResume')
            }
            dispatch(setFileUploads(values))
            onBack && onBack();
        })
    }

    return (
        <>
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <h2>{t('text-uploads')}</h2>
                <FileUpload name="resumeFile" label={t('field-resume')} accept={{'application/pdf': []}} control={control} icon={ResumeIcon} />
                <FileUpload name="headShotFile" label={t('field-headshots')} accept={{'image/jpeg': [], 'image/png': []}} control={control} icon={HeadshotIcon} />
                <div className="resume-consent">
                    <p className="resume-consent--text">{t("field-allow-resume")}</p>
                    <Checkbox name="shareResume" label={t('option-yes')} control={control} />
                </div>
                <TextInput name="linkedin" label={t('field-linkedin')} control={control} type={'url'} />
                <TextInput name="discord" label={t('field-discord')} required={true} control={control} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default FileUploads;