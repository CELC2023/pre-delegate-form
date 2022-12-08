import {configureStore } from '@reduxjs/toolkit'
import checkInReducer from './checkInReducer'

export const store = configureStore({
    reducer: {
        checkIn: checkInReducer,
    }
})