import React from "react";
import s from './Main.module.css'
import container from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainContainer}>
            <div className={container.container}>
                <div className={s.about}>
                    <span>Hi!</span>
                    <h1>My name is OLGA KAPSKAYA</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    PHOTO
                </div>
            </div>
        </div>
    )
}