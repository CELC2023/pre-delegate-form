import {configureStore } from '@reduxjs/toolkit'
import delegateReducer from './delegateReducer'

export const store = configureStore({
    reducer: {
        delegate: delegateReducer,
    }
})