import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { PROFILE } from '../../store/Features/ProfileSlice'

function ProtectedRoutes() {
    const user = useSelector(PROFILE)
    const navigate = useNavigate()
    useEffect(() => {
        if (user)
            navigate("/home")
    })
    return <Outlet />
}

export default ProtectedRoutes