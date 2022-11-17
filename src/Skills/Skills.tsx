import React from "react";
import s from './Skills.module.css'
import container from '../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={s.skillsContainer}>
            <div className={container.container}>
                <h2>Skills</h2>
                <div className={s.skillBlock}> </div>

            </div>
        </div>
    )
}