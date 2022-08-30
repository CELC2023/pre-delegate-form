import { preDelegateDataModel } from "../models/preDelegateData";
import { preDelegateSliceInterface } from "../redux/preDelegateReducer";

export const parsePreDelegateData = (data: preDelegateSliceInterface): preDelegateDataModel => {
    const {language, email, firstName, lastName, delegates, comments} = data;
    const school = data.school ? data.school.uuid : '';
    const schoolName = data.school ? data.school.label : '';
    return {language, email, firstName, lastName, school, schoolName, delegates, comments};
}