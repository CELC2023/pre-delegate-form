import { preDelegateDataModel } from "../models/preDelegateData";
import { preDelegateSliceInterface } from "../redux/preDelegateReducer";

export const parsePreDelegateData = (data: preDelegateSliceInterface): preDelegateDataModel => {
    const {language, email, firstName, lastName, delegates, comments} = data;
    const school = data.school ? data.school.uuid : '';
    return {language, email, firstName, lastName, school, delegates, comments};
}