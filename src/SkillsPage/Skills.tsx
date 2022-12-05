import React from "react";
import s from './Skills.module.css'
import container from '../common/styles/Container.module.css'

import {Skill} from "./Skill/Skill";
import {Title} from "../common/components/Title/Title";

import {FaReact} from "@react-icons/all-files/fa/FaReact";
import {SiRedux} from "@react-icons/all-files/si/SiRedux";
import {DiJavascript1} from "@react-icons/all-files/di/DiJavascript1";
import {DiCss3} from "@react-icons/all-files/di/DiCss3";
import {AiFillHtml5} from "@react-icons/all-files/ai/AiFillHtml5";
import {FaGitAlt} from "@react-icons/all-files/fa/FaGitAlt";
import {VscDebugConsole} from "@react-icons/all-files/vsc/VscDebugConsole";

type SkillsType = {
    logo: JSX.Element
    title: string
    description: string
}
export const Skills = () => {
    const skills: SkillsType[] = [
        {logo: <AiFillHtml5/>, title: 'HTML', description: 'Responsive design, flex, links, headers, images and etc.'},
        {logo: <DiCss3/>, title: 'CSS', description: 'Common CSS, pseudo-classes, pseudo-elements, media queries'},
        {logo: <DiJavascript1/>, title: 'JavaScript/TypeScript', description: 'Data types, functions, promises, async/await'},
        {
            logo: <FaReact/>,
            title: 'React',
            description: 'Class and functional components, components\'s life-cycle methods, props, hooks, HOC'
        },
        {logo: <SiRedux/>, title: 'Redux', description: ''},
        {
            logo: <FaGitAlt/>,
            title: 'Version Control and Git',
            description: 'Creating new repositories, push- and pull-requets, merge, repos cloning'
        },
        {logo: <VscDebugConsole/>, title: 'Testing and Debugging', description: 'TDD, Story book, Unit tests'},

    ]
    return (
        <section className={s.skillsContainer} id={'skillsPage'}>
            <div className={`${container.container} ${s.skillBlock}`}>

                <Title title='Skills' description='skills description will be here'/>

                <div className={s.skills}>
                    {skills.map(elem => <Skill logo={elem.logo}
                                               title={elem.title}
                                               description={elem.description}/>)}

                </div>

            </div>
        </section>
    )
}