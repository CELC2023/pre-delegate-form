import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import FormNextButton from "./FormNextButton";
import "./GettingStarted.scss";
import Resume from "../../images/resume-white.svg";
import Headshot from "../../images/headshot-white.svg";
import Plane from "../../images/plane.svg";
import { useTranslation } from "react-i18next";

const GettingStarted: React.FC<FormPageProps> = ({onComplete}) => {
    
    const {t} = useTranslation();

    interface FormTaskProps {
        id: string,
        icon: string | JSX.Element,
        text: string
    }

    const formTasks: Array<FormTaskProps> = [{
        id: 'headshot',
        icon: <img alt="" src={Headshot} />,
        text: t("text-headshot-submission")
    }, {
        id: 'resume',
        icon: <img alt="" src={Resume} />,
        text: t("text-resume-upload")
    }, {
        id: 'time',
        icon: <p>18</p>,
        text: t("text-minutes-complete")
    }, {
        id: 'flight',
        icon: <img alt="" src={Plane} />,
        text: t("text-travel-info")
    }]

    return (
        <div className="form-box-content">
            <div className="form-tasks-heading">
                <h2>{t("text-information")}</h2>
                <p>{t("text-getting-started")}</p>
            </div>
            <div className="form-tasks-container">
                {
                    formTasks.map((e, i) => {
                        return (
                            <div key={i} id={e.id} className={`form-task-item`} >
                                <div className="form-task-icon">{e.icon}</div>
                                <p className="form-task-text">{e.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <FormNextButton onClick={()=>onComplete()} />
        </div>
    )
}

export default GettingStarted;