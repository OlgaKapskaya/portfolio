import s from './Project.module.css'
import React from "react";

export const Project = () => {
    return (
        <div className={s.projectContainer}>
            <div className={s.projectPreview}> project preview photo</div>
            <h3 className={s.projectTitle}> project Title</h3>
            <p className={s.projectDescription}> text text texte text texte text text texet </p>
        </div>
    )
}