import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './style/headers.module.css'

export const Headers = () => {
const [show, setShow] = useState<boolean>(false)
    return (
        <div className={s.headers}>
            <button onClick={() =>{setShow(!show)}}>{show ? ' hide headers' : 'show headers'}</button>


            {show && <NavLink to={'/sign-in'} >sing-in</NavLink>}
            {show && <NavLink to={'/register'} >register</NavLink>}
            {show && <NavLink to={'/profile'} >profile</NavLink>}
            {show && <NavLink to={'/error-404'} >error-404</NavLink>}
            {show && <NavLink to={'/recovery-password'} >recovery-password</NavLink>}
            {show && <NavLink to={'/create-password'}>create-password</NavLink>}
            {show && <NavLink to={'/test-components'} >test-components</NavLink>}
        </div>
    )
}