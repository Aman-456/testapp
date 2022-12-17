import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { PROFILE } from '../../store/Features/ProfileSlice'

function ProtectedRoutes() {
    const user = useSelector(PROFILE)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (!user)
            navigate("/login", { state: location, replace: true })
    })
    return <Outlet />
}

export default ProtectedRoutes