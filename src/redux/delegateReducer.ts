import { createSlice } from "@reduxjs/toolkit";
import { SchoolOptionData } from "../models/School";
import { Major } from "../models/major";

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
    cfesPosition: string,
    headDelegate: string,
    yearOfStudy: number,
    major: Major | null,
    minor: string,
    stream: string,
    travelMethod: string,
    parkingPass: boolean,
    arrivalTime: string,
    departureTime: string,
    flightNumber: string,
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
    cfesPosition: '',
    headDelegate: '',
    yearOfStudy: 0,
    major: null,
    minor: '',
    stream: '',
    travelMethod: '',
    parkingPass: false,
    arrivalTime: '',
    departureTime: '',
    flightNumber: '',
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
        },
        setSchoolInformation: (state, action) => {
            state.school = action.payload.school;
            state.cfesPosition = action.payload.position;
            state.headDelegate = action.payload.headDelegate;
            state.cfesOfficer = action.payload.isOfficer;
        },
        setDegreeInformation: (state, action) => {
            state.major = action.payload.major;
            state.minor = action.payload.minor;
            state.yearOfStudy = action.payload.yearOfStudy;
        },
        setStream: (state, action) => {
            state.stream = action.payload;
        },
        setTravelInformation: (state, action) => {
            state.travelMethod = action.payload.travelMethod;
            state.departureTime = action.payload.departureTime;
            state.arrivalTime = action.payload.arrivalTime;
            state.flightNumber = action.payload.flightNumber;
        }
    }
})

export const { setDietaryRestrictions, setLanguagesPreference, setPersonalInformation, setSchoolInformation, setDegreeInformation, setStream, setTravelInformation } = delegateSlice.actions;

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
export const selectSchool = (state: {delegate: { school: SchoolOptionData | null}}) => state.delegate.school;
export const selectCfesOfficer = (state: {delegate: { cfesOfficer: boolean}}) => state.delegate.cfesOfficer;
export const selectCfesPosition = (state: {delegate: { cfesPosition: string}}) => state.delegate.cfesPosition;
export const selectHeadDelegate = (state: {delegate: { headDelegate: string}}) => state.delegate.headDelegate;
export const selectDegreeMajor = (state: {delegate: { major: Major}}) => state.delegate.major;
export const selectDegreeMinor = (state: {delegate: { minor: string}}) => state.delegate.minor;
export const selectDegreeYear = (state: {delegate: { yearOfStudy: number}}) => state.delegate.yearOfStudy;
export const selectStream = (state: {delegate: { stream: string}}) => state.delegate.stream;
export const selectArrivalTime = (state: {delegate: { arrivalTime: string}}) => state.delegate.arrivalTime;
export const selectDepartureTime = (state: {delegate: { departureTime: string}}) => state.delegate.departureTime;
export const selectFlightNumber = (state: {delegate: { flightNumber: string}}) => state.delegate.flightNumber;
export const selectTravelMethod = (state: {delegate: { travelMethod: string}}) => state.delegate.travelMethod;




export default delegateSlice.reducer;
