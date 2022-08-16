import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const Button: React.FC<ButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {
    const finalClassName = `${red ? s.default : s.red} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}
