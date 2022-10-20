import { delegateDataModel } from "../models/delegateData";
import { delegateSliceInterface } from "../redux/delegateReducer";


export const parseDelegateData = (data: delegateSliceInterface): delegateDataModel => {
    const {language, email, phone, firstName, lastName, preferredName, pronouns, dateOfBirth, address, cfesOfficer, cfesPosition, headDelegate, yearOfStudy, minor, travelMethod, arrivalTime, flightNumber, emergencyContactName, emergencyContactPhone, emergencyContactRelationship, dietaryRestrictions, allergies, medicalInformation, accessibilityNeeds, roomingAgreement, genders, otherGenders, roomingGenders, otherRoomingGenders, noiseLevel, alcohol, roomingRequests, refuseToRoomWith, frenchCaseCompetition, languages, linkedin, discord, headShotUrl, resumeUrl, shareResume, socialActivity } = data;
    const school = data.school ? data.school.uuid : '';
    const schoolName = data.school ? data.school.label : '';
    const major = data.major ? data.major.value : '';
    const singleRoom = data.singleRoom === null ? false : data.singleRoom;
    const mosqueTrip = data.mosqueTrip === null ? false : data.mosqueTrip;
    const shirtSize = data.shirtSize? data.shirtSize.value : '';
    return {language, email, phone, firstName, lastName, preferredName, pronouns, dateOfBirth, address, cfesOfficer, cfesPosition, headDelegate, yearOfStudy, minor, travelMethod, arrivalTime, flightNumber, emergencyContactName, emergencyContactPhone, emergencyContactRelationship, dietaryRestrictions, allergies, medicalInformation, accessibilityNeeds, roomingAgreement, singleRoom, genders, otherGenders, roomingGenders, otherRoomingGenders, noiseLevel, alcohol, roomingRequests, refuseToRoomWith, frenchCaseCompetition, languages, linkedin, discord, headShotUrl, resumeUrl, shareResume, school, schoolName, major, socialActivity, mosqueTrip, shirtSize};
}