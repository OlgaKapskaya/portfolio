import React from "react";
import s from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <nav className={s.nav}>
            <a href={'#mainPage'} className={s.link}>Home</a>
            <a href={'#skillsPage'} className={s.link}>Skills</a>
            <a href={'#projectsPage'} className={s.link}>Projects</a>
            <a href={'#contactPage'} className={s.link}>Contact</a>
        </nav>
    )
}