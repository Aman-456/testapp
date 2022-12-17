import { useDispatch, useSelector } from 'react-redux'
import { load, PROFILE, setProfile, unload } from '../../../store/Features/ProfileSlice'
// import { setTheme, Theme } from '../../../store/Features/themeSlice'

function Starter() {
    const disptach = useDispatch()
    const user = useSelector(PROFILE)
    const set = () => {
        disptach(load())
        const localuser = localStorage.getItem("user")
        const localtheme = localStorage.getItem("theme")
        if (localtheme) {
            // disptach(setTheme(localtheme))
        }
        if (!user)
            disptach(setProfile(localuser))
        disptach(unload())
    }
    window.addEventListener("storage", () => set())
    set();
    return null
}

export default Starter