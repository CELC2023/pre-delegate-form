import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import FormNextButton from "./FormNextButton";
import "./GettingStarted.scss";
import Resume from "../../images/resume-white.svg";
import Headshot from "../../images/headshot-white.svg";
import Plane from "../../images/plane.svg";

const GettingStarted: React.FC<FormPageProps> = ({onComplete}) => {
    
    interface FormTaskProps {
        id: string,
        icon: string | JSX.Element,
        text: string
    }

    const formTasks: Array<FormTaskProps> = [{
        id: 'headshot',
        icon: <img alt="" src={Headshot} />,
        text: 'Headshot Submission'
    }, {
        id: 'resume',
        icon: <img alt="" src={Resume} />,
        text: 'Resume Upload'
    }, {
        id: 'time',
        icon: <p>25</p>,
        text: 'Minutes to Complete'
    }, {
        id: 'flight',
        icon: <img alt="" src={Plane} />,
        text: 'Flight Information'
    }]

    return (
        <div className="form-box-content">
            <div className="form-tasks-heading">
                <h2>Information</h2>
                <p>Before you get started, take note of the following:</p>
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