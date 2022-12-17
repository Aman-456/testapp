import { configureStore } from '@reduxjs/toolkit'
import ProfileSliceReducer from "./Features/ProfileSlice"
import LanguageSliceReducer from "./Features/languageSlice"
import ThemeSliceReducer from "./Features/themeSlice"
export const store = configureStore({
    reducer: {
        profile: ProfileSliceReducer,
        language: LanguageSliceReducer,
        theme: ThemeSliceReducer
    },
})