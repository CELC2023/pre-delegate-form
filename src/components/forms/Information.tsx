import React from "react";
import FormPageProps from "../../interfaces/FormPageProps";
import { blankHref } from "../../utils/constants";

const Information: React.FC<FormPageProps> = ({onComplete}) => {
    return (
        <>
            <div className="form-content">
                <div className="form-fields">
                    <h2>Information</h2>
                    <p>In this form, please outline how many delegates you are expecting to send to the CELC 2023. The purpose of this form is to get a more accurate estimate of how many attendees we can expect for planning.</p>
                    <a className="btn btn--row" href={blankHref}>Download Package</a>
                </div>
            </div>
            <div className="form-navigation-next-container">
                    <a className="next-button" onClick={onComplete}>Next</a>
            </div>
        </>
    )
}

export default Information;