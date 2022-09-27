import { createSlice } from "@reduxjs/toolkit";
import { SchoolOptionData } from "../models/School";

export interface delegateSliceInterface {
    language: string,
    email: string,
    phone: string,
    firstName: string,
    lastName: string,
    preferredName: string,
    pronouns: string,
    dateOfBirth: string,
    cfesOfficer: boolean,
    yearOfStudy: number,
    major: string,
    stream: string,
    travelMethod: string,
    parkingPass: boolean,
    arrivalTime: Date | null,
    school: SchoolOptionData | null,
    emergencyContactName: string,
    emergencyContactPhone: string,
    emergencyContactRelationship: string,
    dietaryRestrictions: Array<String>,
    allergies: string,
    medicalInformation: string,
    accessibilityNeeds: string,
    gender: string,
    roomingGenders: Array<String>,
    noiseLevel: string,
    alcohol: string,
    drugs: string,
    roomingRequests: string,
    refuseToRoomWith: string,
    frenchCaseCompetition: boolean,
    languages: Array<String>,
    linkedin: string,
    discord: string,
    headShot: string,
    resume: string,
    comments: string,
}

const initialState: delegateSliceInterface = {
    language: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    preferredName: '',
    pronouns: '',
    dateOfBirth: '',
    cfesOfficer: false,
    yearOfStudy: 0,
    major: '',
    stream: '',
    travelMethod: '',
    parkingPass: false,
    arrivalTime: null,
    school: null,
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    dietaryRestrictions: [],
    allergies: '',
    medicalInformation: '',
    accessibilityNeeds: '',
    gender: '',
    roomingGenders: [],
    noiseLevel: '',
    alcohol: '',
    drugs: '',
    roomingRequests: '',
    refuseToRoomWith: '',
    frenchCaseCompetition: false,
    languages: [],
    linkedin: '',
    discord: '',
    headShot: '',
    resume: '',
    comments: ''
}

export const delegateSlice = createSlice({
    name: "delegate",
    initialState,
    reducers: {
        setDietaryRestrictions: (state, action) => {
            state.dietaryRestrictions = action.payload.dietaryRestrictions;
            state.allergies = action.payload.allergies;
        },
        setLanguagesPreference: (state, action) => {
            state.languages = action.payload.languages;
            state.frenchCaseCompetition = action.payload.frenchCaseCompetition;
        },
        setPersonalInformation: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.preferredName = action.payload.preferredName;
            state.pronouns = action.payload.pronouns;
            state.phone = action.payload.phone;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
})

export const { setDietaryRestrictions, setLanguagesPreference, setPersonalInformation } = delegateSlice.actions;

// selectors
export const selectEmail = (state: {delegate: {email: string}}) => state.delegate.email;
export const selectFirstName = (state: {delegate: {firstName: string}}) => state.delegate.firstName;
export const selectLastName = (state: {delegate: {lastName: string}}) => state.delegate.lastName;
export const selectPreferredName = (state: {delegate: {preferredName: string}}) => state.delegate.preferredName;
export const selectPronouns = (state: {delegate: {pronouns: string}}) => state.delegate.pronouns;
export const selectPhone = (state: {delegate: {phone: string}}) => state.delegate.phone;
export const selectDateOfBirth = (state: {delegate: {dateOfBirth: string}}) => state.delegate.dateOfBirth;
export const selectAllergies = (state: {delegate: { allergies: string}}) => state.delegate.allergies;
export const selectDietaryRestrictions = (state: {delegate: { dietaryRestrictions: Array<string>}}) => state.delegate.dietaryRestrictions;
export const selectLanguagesPreference = (state: {delegate: { languages: Array<string>}}) => state.delegate.languages;

export default delegateSlice.reducer;
