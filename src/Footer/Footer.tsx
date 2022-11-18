import React from "react";
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.iconsContainer}>
                <div className={s.logo}> logo</div>
                <div className={s.logo}> logo</div>
                <div className={s.logo}> logo</div>
                <div className={s.logo}> logo</div>
            </div>
        </footer>
    )
}