import s from './Project.module.scss'
import {FC, memo} from 'react';

type StyleType = {
    backgroundImage: string
    backgroundSize: string
}

type ProjectProps = {
    style: StyleType
    title: string
    description?: string
    link?: string
}

export const Project: FC<ProjectProps> = memo(({title, description, link, style}) => {
    return (
        <div className={s.projectContainer}>
            <div className={s.portfolioProject} style={style}>
                <div className={s.projectPreview} >
                    <div className={s.content}>
                        <p className={s.projectDescription}> {description} </p>
                        <h4 className={s.projectTitle}> {title} </h4>

                        <div className={s.buttonLink}>
                            <a href={link} className={s.linkDemo} target='_blank' rel='noreferrer'> SHOW DEMO </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
})