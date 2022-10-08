import { delegateDataModel } from "../models/delegateData";
import { delegateSliceInterface } from "../redux/delegateReducer";


export const parseDelegateData = (data: delegateSliceInterface): delegateDataModel => {
    const {language, email, phone, firstName, lastName, preferredName, pronouns, dateOfBirth, cfesOfficer, cfesPosition, headDelegate, yearOfStudy, minor, stream, travelMethod, parkingPass, arrivalTime, departureTime, flightNumber, emergencyContactName, emergencyContactPhone, emergencyContactRelationship, dietaryRestrictions, allergies, medicalInformation, accessibilityNeeds, roomingAgreement, singleRoom, genders, otherGenders, roomingGenders, otherRoomingGenders, noiseLevel, alcohol, roomingRequests, refuseToRoomWith, frenchCaseCompetition, languages, linkedin, discord, headShotUrl, resumeUrl, shareResume } = data;
    const school = data.school ? data.school.uuid : '';
    const schoolName = data.school ? data.school.label : '';
    const major = data.major ? data.major.value : '';
    return {language, email, phone, firstName, lastName, preferredName, pronouns, dateOfBirth, cfesOfficer, cfesPosition, headDelegate, yearOfStudy, minor, stream, travelMethod, parkingPass, arrivalTime, departureTime, flightNumber, emergencyContactName, emergencyContactPhone, emergencyContactRelationship, dietaryRestrictions, allergies, medicalInformation, accessibilityNeeds, roomingAgreement, singleRoom, genders, otherGenders, roomingGenders, otherRoomingGenders, noiseLevel, alcohol, roomingRequests, refuseToRoomWith, frenchCaseCompetition, languages, linkedin, discord, headShotUrl, resumeUrl, shareResume, school, schoolName, major};
}