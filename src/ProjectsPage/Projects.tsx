import React from "react";
import s from './Projects.module.css'
import container from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={s.projectsContainer}>
            <div className={`${container.container} ${s.projectsBlock}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    )
}