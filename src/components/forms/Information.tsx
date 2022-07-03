import React from "react";
import { blankHref } from "../../utils/constants";

const Information: React.FC = () => {
    return (
        <div className="form-fields">
            <h2>Information</h2>
            <p>In this form, please outline how many delegates you are expecting to send to the CELC 2023. The purpose of this form is to get a more accurate estimate of how many attendees we can expect for planning.</p>
            <a className="btn btn--row" href={blankHref}>Download Package</a>
        </div>
    )
}

export default Information;