import {configureStore } from '@reduxjs/toolkit'
import delegateReducer from './delegateReducer'
import preDelegateReducer from './preDelegateReducer'

export const store = configureStore({
    reducer: {
        preDelegate: preDelegateReducer,
        delegate: delegateReducer,
    }
})