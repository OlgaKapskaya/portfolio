import s from "./Skill.module.css";
import React from "react";

export const Skill = () => {
    return (
        <div className={s.skillContainer}>
            <div className={s.skillIcon}> skill logo</div>
            <h3 className={s.skillTitle}> Skill Title</h3>
            <p className={s.skillInfo}> text text texte text texte text text texet </p>
        </div>
    )
}