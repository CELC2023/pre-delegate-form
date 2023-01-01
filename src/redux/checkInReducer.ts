import { createSlice } from "@reduxjs/toolkit";
import { checkInDataModel } from "../models/checkInData";

const initialState: checkInDataModel = {
  language: "",
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  pronouns: "",
  dateOfBirth: "",
  arrivalDate: "",
  liabilityWaiver: false,
  idCheck: false,
  mediaRelease: false,
  schoolId: "",
  schoolName: "",
  roomMates: "",
  roomId: 0,
  changes: "",
  delegateId: "",
  governance: false,
};

export const checkInSlice = createSlice({
  name: "checkIn",
  initialState,
  reducers: {
    setLanguagePreference: (state, action) => {
      state.language = action.payload;
    },
    setInformationChange: (state, action) => {
      state.changes = action.payload;
    },
    setCheckInData: (state, action) => {
      state.language = action.payload.language;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.pronouns = action.payload.pronouns;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.arrivalDate = action.payload.arrivalDate;
      state.liabilityWaiver = action.payload.liabilityWaiver;
      state.idCheck = action.payload.idCheck;
      state.mediaRelease = action.payload.mediaRelease;
      state.schoolId = action.payload.schoolId;
      state.schoolName = action.payload.schoolName;
      state.roomId = action.payload.roomId;
      state.roomMates = action.payload.roomMates;
      state.changes = action.payload.changes;
      state.governance = action.payload.governance;
      state.roomMates = action.payload.roomMates;
    },
    setWaiver: (state, action) => {
      state.liabilityWaiver = action.payload;
    },
    setGovernance: (state, action) => {
      state.governance = action.payload;
    },
    setId: (state, action) => {
      state.delegateId = action.payload;
    },
  },
});

export const {
  setLanguagePreference,
  setCheckInData,
  setInformationChange,
  setWaiver,
  setGovernance,
  setId,
} = checkInSlice.actions;

// selectors
export const selectEmail = (state: { checkIn: { email: string } }) =>
  state.checkIn.email;
export const selectFirstName = (state: { checkIn: { firstName: string } }) =>
  state.checkIn.firstName;
export const selectLastName = (state: { checkIn: { lastName: string } }) =>
  state.checkIn.lastName;
export const selectPronouns = (state: { checkIn: { pronouns: string } }) =>
  state.checkIn.pronouns;
export const selectPhone = (state: { checkIn: { phone: string } }) =>
  state.checkIn.phone;
export const selectDateOfBirth = (state: {
  checkIn: { dateOfBirth: string };
}) => state.checkIn.dateOfBirth;
export const selectAddress = (state: { checkIn: { address: string } }) =>
  state.checkIn.address;
export const selectWaiver = (state: {
  checkIn: { liabilityWaiver: boolean };
}) => state.checkIn.liabilityWaiver;
export const selectId = (state: { checkIn: { delegateId: string } }) =>
  state.checkIn.delegateId;
export const selectGovernance = (state: { checkIn: { governance: boolean } }) =>
  state.checkIn.governance;
export const selectChanges = (state: { checkIn: { changes: string } }) =>
  state.checkIn.changes;
export const selectRoomMates = (state: { checkIn: { roomMates: string } }) =>
  state.checkIn.roomMates;

export default checkInSlice.reducer;
