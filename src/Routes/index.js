
import LayoutPrivate from '../Components/Layout/LayoutPrivate'
import LayoutPublic from '../Components/Layout/LayoutPublic'
import { Route, Routes } from 'react-router-dom'
import { Error404 } from '../Components/Common'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoute'
import {
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent
} from '../Components/Pages'
function RoutesWrapper() {
    return (
        <Routes>
            <Route path='/' element={< ProtectedRoutes />} >
                <Route path='/' element={<LayoutPrivate />}>
                    <Route index path='/' element={<HomeComponent />} />
                    <Route path='/about' element={<AboutComponent />} />
                    <Route path='/contact' element={<ContactComponent />} />
                    <Route path='/user' element={<Error404 />} />
                    <Route path='/profile' element={<ProfileComponent />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Route >

            <Route path='/' element={<PublicRoutes />}>
                <Route path='/' element={<LayoutPublic />}>
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/signup' element={<SignupComponent />} />
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Route>
            <Route path='*' element={<Error404 />} />
        </Routes>)
}

export default RoutesWrapper