import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import FormPageProps from "../../interfaces/FormPageProps";
import { selectDelegateData, selectFirstName, selectHeadShot, selectHeadShotUrl, selectLastName, selectLinkedin, selectResume, selectResumeUrl, selectShareResume, setFileUploads } from "../../redux/delegateReducer";
import axiosInstance from "../../utils/axios";
import Checkbox from "../input/Checkbox";
import FileUpload from "../input/FileUpload";
import TextInput from "../input/TextInput";
import FormContent from "./FormContent";
import FormNextButton from "./FormNextButton";
import FormPreviousButton from "./FormPreviousButton";
import HeadshotIcon from "../../images/headshot-red.svg";
import ResumeIcon from "../../images/resume-red.svg";
import ProgressDots from "../ProgressDots";
import Loader from "../../images/loader.gif";
import "./FileUploads.scss";
import { parseDelegateData } from "../../utils/datautils";

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
    }

    const defaultResume = useSelector(selectResume);
    const defaultHeadShot = useSelector(selectHeadShot);
    const delegateFirstName = useSelector(selectFirstName);
    const delegateLastName = useSelector(selectLastName);
    const formData = useSelector(selectDelegateData);

    const defaultValues: FileUploadsForm = {
        resume: useSelector(selectResume),
        resumeUrl: useSelector(selectResumeUrl),
        resumeFile: defaultResume !== "" ? new File([""], defaultResume) : null,
        headShot: useSelector(selectHeadShot),
        headShotFile: defaultHeadShot !== "" ? new File([""], defaultHeadShot) : null,
        headShotUrl: useSelector(selectHeadShotUrl),
        shareResume: useSelector(selectShareResume),
        linkedin: useSelector(selectLinkedin)
    }

    const {control, watch, setValue} = useForm({defaultValues: defaultValues});

    const [isLoading, setIsLoading] = useState<boolean>(false);

    interface UploadResult {
        resumeUrl: string,
        headShotUrl: string
    }

    interface IUploadFiles {
        (resume: File | null, headShot: File | null): Promise<UploadResult>
    }

    const uploadFiles: IUploadFiles = async (resume, headShot) => {
        var resumeUrl = watch('resumeUrl'), headShotUrl = watch('headShotUrl')
        if(resume !== null) {
            await uploadFile(resume, 'resume').then((res) => {
                setValue("resumeUrl", res)
                setValue("resume", resume.name)
                setValue("resumeFile", new File([""], resume.name))
                resumeUrl = res
            })
        }
        if(headShot !== null) {
            await uploadFile(headShot, 'headShot').then((res) => {
                setValue("headShotUrl", res)
                setValue("headShot", headShot.name)
                setValue("headShotFile", new File([""], headShot.name)) 
                headShotUrl = res
            })
        }
        return {resumeUrl, headShotUrl}
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

    const [triggerSubmit, setTriggerSubmit] = useState<boolean>(false);
    
    useEffect(() => {
        if(triggerSubmit === true) {
             axiosInstance.post('/delegate/', parseDelegateData(formData))
            .then(() => {
                setIsLoading(false)
                onComplete && onComplete();
            })
            .catch((err) => {
                setIsLoading(false)
                console.error(err)
            })
            setTriggerSubmit(false)
        }
    }, [formData, onComplete, triggerSubmit])

    const onNext = () => {
        const resumeFile = watch('resumeFile');
        const headShotFile = watch('headShotFile');
        const resumeName = watch('resume')
        const headShotName = watch('headShot')

        if(resumeFile === null || headShotFile === null) { 
            return
        } else if ((resumeFile.size > 0 && headShotFile.size > 0) || resumeFile.name !== resumeName || headShotFile.name !== headShotName) {
            setIsLoading(true)
            uploadFiles(resumeFile, headShotFile)
            .then((res) => {
                const values = {
                    headShot: watch('headShot'),
                    headShotUrl: res.headShotUrl,
                    resume: watch('resume'),
                    resumeUrl: res.resumeUrl,
                    linkedin: watch('linkedin'),
                    shareResume: watch('shareResume')
                }
                dispatch(setFileUploads(values))
                setTriggerSubmit(true)
            })
        } else if(watch('resumeUrl') !== "" && watch("headShotUrl") !== "") {
            const values = {
                headShot: watch('headShot'),
                headShotUrl: watch('headShotUrl'),
                resume: watch('resume'),
                resumeUrl: watch('resumeUrl'),
                linkedin: watch('linkedin'),
                shareResume: watch('shareResume')
            }
            setIsLoading(true)
            dispatch(setFileUploads(values))
            setTriggerSubmit(true)
        }

    }

    const onPrevious = () => {
        const resumeFile = watch('resumeFile');
        const headShotFile = watch('headShotFile'); 
        
        setIsLoading(true)
        uploadFiles(resumeFile, headShotFile).then((res) => {
            const values = {
                headShot: watch('headShot'),
                headShotUrl: res.headShotUrl,
                resume: watch('resume'),
                resumeUrl: res.resumeUrl,
                linkedin: watch('linkedin'),
                shareResume: watch('shareResume')
            }
            setIsLoading(false)
            dispatch(setFileUploads(values))
            onBack && onBack();
        })
    }

    return (
        <>
            {
                isLoading &&
                <div className="loading" >
                    <img alt="" src={Loader} className="loader-image" />
                </div>
            }
            <FormPreviousButton onClick={onPrevious} />
            <FormContent>
                <ProgressDots steps={5} current={5} />
                <h2>{t('text-uploads')}</h2>
                <FileUpload name="resumeFile" label={t('field-resume')} accept={{'application/pdf': []}} control={control} icon={ResumeIcon} required={true} />
                <FileUpload name="headShotFile" label={t('field-headshots')} accept={{'image/jpeg': [], 'image/png': []}} control={control} icon={HeadshotIcon} required={true} />
                <div className="resume-consent">
                    <p className="resume-consent--text">{t("field-allow-resume")}</p>
                    <Checkbox name="shareResume" label={t('option-yes')} control={control} />
                </div>
                <TextInput name="linkedin" label={t('field-linkedin')} control={control} type={'url'} />
            </FormContent>
            <FormNextButton onClick={onNext} />
        </>
    )
}

export default FileUploads;