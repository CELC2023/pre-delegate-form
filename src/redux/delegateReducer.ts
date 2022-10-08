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
    dietaryRestrictions: Array<string>,
    allergies: string,
    medicalInformation: string,
    accessibilityNeeds: string,
    roomingAgreement: boolean,
    singleRoom: boolean,
    genders: Array<string>,
    otherGenders: string,
    roomingGenders: Array<string>,
    otherRoomingGenders: string,
    noiseLevel: string,
    alcohol: string,
    roomingRequests: string,
    refuseToRoomWith: string,
    frenchCaseCompetition: boolean,
    languages: Array<string>,
    linkedin: string,
    discord: string,
    headShot: string,
    headShotUrl: string,
    resume: string,
    resumeUrl: string,
    shareResume: boolean,
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
    roomingAgreement: false,
    singleRoom: false,
    genders: [],
    otherGenders: '',
    roomingGenders: [],
    otherRoomingGenders: '',
    noiseLevel: '',
    alcohol: '',
    roomingRequests: '',
    refuseToRoomWith: '',
    frenchCaseCompetition: false,
    languages: [],
    linkedin: '',
    discord: '',
    headShot: '',
    headShotUrl: '',
    resume: '',
    resumeUrl: '',
    shareResume: false,
    comments: ''
}

export const delegateSlice = createSlice({
    name: "delegate",
    initialState,
    reducers: {
        setLanguagePreference: (state, action) => {
            state.language = action.payload
        },
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
        },
        setEmergencyContact: (state, action) => {
            state.emergencyContactName = action.payload.name;
            state.emergencyContactPhone = action.payload.phone;
            state.emergencyContactRelationship = action.payload.relation;
        },
        setMedicalInformation: (state, action) => {
            state.medicalInformation = action.payload;
        },
        setAccessibilityNeeds: (state, action) => {
            state.accessibilityNeeds = action.payload;
        },
        setRoomAgreement: (state, action) => {
            state.roomingAgreement = action.payload;
        },
        setRoomNoise: (state, action) => {
            state.noiseLevel = action.payload;
        },
        setRoomAlcohol: (state, action) => {
            state.alcohol = action.payload.alcohol;
        },
        setRoomRequests: (state, action) => {
            state.roomingRequests = action.payload.requests;
            state.refuseToRoomWith = action.payload.block;
        },
        setGenders: (state, action) => {
            state.genders = action.payload.genders;
            state.otherGenders = action.payload.otherGenders;
        },
        setRoomingGenders: (state, action) => {
            state.roomingGenders = action.payload.roomingGenders;
            state.otherRoomingGenders = action.payload.otherRoomingGenders;
        },
        setActivityLanguage: (state, action) => {
            state.languages = action.payload.languages;
            state.frenchCaseCompetition = action.payload.frenchCaseCompetition;
        },
        setSingleRoom: (state, action) => {
            state.singleRoom = action.payload.singleRoom;
        },
        setFileUploads: (state, action) => {
            state.resume = action.payload.resume;
            state.resumeUrl = action.payload.resumeUrl;
            state.headShot = action.payload.headShot;
            state.headShotUrl = action.payload.headShotUrl;
            state.linkedin = action.payload.linkedin;
            state.discord = action.payload.discord;
            state.shareResume = action.payload.shareResume;
        }
    }
})

export const { setDietaryRestrictions, setLanguagePreference, setLanguagesPreference, setPersonalInformation, setSchoolInformation, setDegreeInformation, setStream, setTravelInformation, setEmergencyContact, setRoomAgreement, setMedicalInformation, setAccessibilityNeeds, setRoomNoise, setRoomAlcohol, setRoomRequests, setGenders, setRoomingGenders, setActivityLanguage, setSingleRoom, setFileUploads } = delegateSlice.actions;

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
export const selectEmergencyContactName = (state: {delegate: { emergencyContactName: string}}) => state.delegate.emergencyContactName;
export const selectEmergencyContactPhone = (state: {delegate: { emergencyContactPhone: string}}) => state.delegate.emergencyContactPhone;
export const selectEmergencyContactRelation = (state: {delegate: { emergencyContactRelationship: string}}) => state.delegate.emergencyContactRelationship;
export const selectRoomingAgreement = (state: {delegate: { roomingAgreement: boolean}}) => state.delegate.roomingAgreement;
export const selectMedicalInformation = (state: {delegate: { medicalInformation: string}}) => state.delegate.medicalInformation;
export const selectAccessibilityNeeds = (state: {delegate: { accessibilityNeeds: string}}) => state.delegate.accessibilityNeeds;
export const selectRoomNoise = (state: {delegate: { noiseLevel: string}}) => state.delegate.noiseLevel;
export const selectRoomAlcohol = (state: {delegate: { alcohol: string}}) => state.delegate.alcohol;
export const selectRoomRequests = (state: {delegate: { roomingRequests: string}}) => state.delegate.roomingRequests;
export const selectRoomBlocks = (state: {delegate: {refuseToRoomWith: string}}) => state.delegate.refuseToRoomWith;
export const selectGenders = (state: {delegate: { genders: Array<string>}}) => state.delegate.genders;
export const selectOtherGenders = (state: {delegate: { otherGenders: string}}) => state.delegate.otherGenders;
export const selectRoomingGenders = (state: {delegate: { roomingGenders: Array<string>}}) => state.delegate.roomingGenders;
export const selectOtherRoomingGenders = (state: {delegate: { otherRoomingGenders: string}}) => state.delegate.otherRoomingGenders;
export const selectLanguages = (state: {delegate: { languages: Array<string>}}) => state.delegate.languages;
export const selectFrenchCaseCompetition = (state: {delegate: { frenchCaseCompetition: boolean}}) => state.delegate.frenchCaseCompetition;
export const selectSingleRoom = (state: {delegate: { singleRoom: boolean }}) => state.delegate.singleRoom
export const selectResume = (state: {delegate: { resume: string }}) => state.delegate.resume;
export const selectResumeUrl = (state: {delegate: { resumeUrl: string }}) => state.delegate.resumeUrl;
export const selectHeadShot = (state: {delegate: { headShot: string }}) => state.delegate.headShot;
export const selectHeadShotUrl = (state: {delegate: { headShotUrl: string }}) => state.delegate.headShotUrl;
export const selectShareResume = (state: {delegate: { shareResume: boolean }}) => state.delegate.shareResume;
export const selectLinkedin = (state: {delegate: { linkedin: string }}) => state.delegate.linkedin;
export const selectDiscord = (state: {delegate: { discord: string }}) => state.delegate.discord;
export const selectDelegateData = (state: {delegate: delegateSliceInterface}) => state.delegate;

export default delegateSlice.reducer;
