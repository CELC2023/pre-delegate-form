import {configureStore } from '@reduxjs/toolkit'
import preDelegateReducer from './preDelegateReducer'

export const store = configureStore({
    reducer: {
        preDelegate: preDelegateReducer
    }
})