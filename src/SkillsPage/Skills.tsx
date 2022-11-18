import React from "react";
import s from './Skills.module.css'
import container from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsContainer}>
            <div className={`${container.container} ${s.skillBlock}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>

            </div>
        </div>
    )
}