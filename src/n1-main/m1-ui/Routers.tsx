import React from 'react'
import {Route, Routes} from "react-router-dom";
import {SingIn} from "../../n2-featuries/a1-sing-in/s1-ui/SingIn";
import {Register} from "../../n2-featuries/a2-register/r1-ui/Register";
import {Profile} from "../../n2-featuries/a3-profile/p1-ui/Profile";
import {Error404} from "../../n2-featuries/a4-error-404/e1-ui/Error404";
import {RecoveryPassword} from "../../n2-featuries/a5-recovery-password/r1-ui/RecoveryPassword";
import {CreatePassword} from "../../n2-featuries/a6-create-password/c1-ui/CreatePassword";
import {TestComponents} from "../../n2-featuries/a7-test/t1-ui/TestComponents";
export const Routers = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<SingIn />}/>
                <Route path={'sign-in'} element={<SingIn/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'error-404'} element={<Error404/>}/>
                <Route path={'recovery-password'} element={<RecoveryPassword/>}/>
                <Route path={'create-password'} element={<CreatePassword/>}/>
                <Route path={'test-components'} element={<TestComponents/>}/>
            </Routes>
        </>
    )
}