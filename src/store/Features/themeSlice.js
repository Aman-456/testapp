import { createSlice } from '@reduxjs/toolkit'

const light = {
    colorPrimary: "#ddb669", //primary 
    colorLink: "#ddb669", //primary
    colorText: "#173039",  //text color
    colorTextTertiary: "#8a8c99", //text color light
    colorPrimaryBgHover: "#f9f4ea", //active,hover
    colorBgBase: "#f5f9f9", // layout color,
    colorBgContainer: "#ffffff", //container background,
}
const dark = {
    colorPrimaryBgHover: "#112545",
    colorPrimaryBorder: "#15325b",
    colorPrimary: "#ddb669", //primary 
    colorLink: "#ddb669", //primary
    colorText: "rgba(255, 255, 255, 0.85)",
    colorBgContainer: "#393939",//active
    colorBgLayout: "#2d2d2d", //active
    colorBgMask: "rgba(0, 0, 0, 0.4)"
}

const initialState = {
    flag: localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" ? dark : light : light
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            console.log(action.payload);
            if (action.payload === "light") {
                localStorage.setItem("theme", "light")
                state.flag = "light";
                state.theme = light
            }
            else {
                state.flag = "dark";
                state.theme = dark
                localStorage.setItem("theme", "dark")
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme } = ThemeSlice.actions
export const Theme = (state) => state.theme

export default ThemeSlice.reducer