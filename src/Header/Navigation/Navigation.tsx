import React from "react";
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={s.nav}>
            <a href={''} className={s.link}>HOME</a>
            <a href={''} className={s.link}>SKILLS </a>
            <a href={''} className={s.link}>PROJECTS </a>
            <a href={''} className={s.link}>CONTACT </a>
        </nav>
    )
}