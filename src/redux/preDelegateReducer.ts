import { createSlice } from "@reduxjs/toolkit";
import { SchoolOptionData } from "../models/School";

export interface preDelegateSliceInterface {
    email: string,
    firstName: string,
    lastName: string,
    school: SchoolOptionData | null,
    delegates: number,
    comments: string,
}

const initialState: preDelegateSliceInterface = {
    email: '',
    firstName: '',
    lastName: '',
    school: null,
    delegates: 0,
    comments: ''
}

export const preDelegateSlice = createSlice({
    name: "preDelegate",
    initialState,
    reducers: {
        setPersonalInformation: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        setSchool: (state, action) => {
            state.school = action.payload;
        },
        setDelegateCount: (state, action) => {
            state.delegates = action.payload
        }
    }
})

export const { setPersonalInformation, setSchool, setDelegateCount } = preDelegateSlice.actions;

// selectors

export const selectEmail = (state: { preDelegate: { email: string; }; }) => state.preDelegate.email;
export const selectFirstName = (state: { preDelegate: { firstName: string; }; }) => state.preDelegate.firstName;
export const selectLastName = (state: { preDelegate: { lastName: string; }; }) => state.preDelegate.lastName;
export const selectSchool = (state: {preDelegate: {school: SchoolOptionData;};}) => state.preDelegate.school;
export const selectDelegateCount = (state: {preDelegate: {delegates: number;};}) => state.preDelegate.delegates;

export default preDelegateSlice.reducer;