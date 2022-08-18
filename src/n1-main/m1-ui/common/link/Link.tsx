import React from 'react'
import s from './link.module.css'
import {NavLink} from "react-router-dom";

type LinkPropsType = {
    value: string
    to: string
}

export const Link = (props:LinkPropsType) => {
    return (
        <div>
            <NavLink to={props.to}  className={({ isActive }) =>
                isActive ? s.active : s.style
            } >{props.value}</NavLink>
        </div>
    )
}

