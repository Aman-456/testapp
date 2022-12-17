import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    language: null,
    direction: 'rtl',
}

export const LanguageSlice = createSlice({
    name: 'languge',
    initialState,
    reducers: {
        setlanguage: (state, action) => { state.language = action.payload },
    },
})

// Action creators are generated for each case reducer function
export const { setlanguage } = LanguageSlice.actions
export const language = (state, action) => state.language.language
export const direction = (state) => state.language.direction

export default LanguageSlice.reducer