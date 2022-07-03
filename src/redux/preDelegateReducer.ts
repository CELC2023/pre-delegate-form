import { createSlice } from "@reduxjs/toolkit";

export interface preDelegateSliceInterface {
    email: string,
    firstName: string,
    lastName: string,
    school: string,
    delegates: number,
    comments: string,
}

const initialState: preDelegateSliceInterface = {
    email: '',
    firstName: '',
    lastName: '',
    school: '',
    delegates: 0,
    comments: ''
}

export const preDelegateSlice = createSlice({
    name: "preDelegate",
    initialState,
    reducers: {
        setPersonalInformation: (state, action) => {
            state.email = 'testing';
        }
    }
})

export default preDelegateSlice.reducer;