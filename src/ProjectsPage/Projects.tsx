import {FC} from 'react';
import s from './Projects.module.scss'
import container from '../common/styles/Container.module.scss';
import {Project} from './Project/Project';
import {Title} from '../common/components/Title/Title';
import sn from '../../src/accets/image/SN.jpeg'
import todo from '../../src/accets/image/todo.jpeg'
import shop from '../../src/accets/image/shop.webp'

export const Projects:FC = () => {
    const socialStyle = {
        backgroundImage: `url(${sn})`,
        backgroundSize: 'cover',
    }
    const todoStyle = {
        backgroundImage: `url(${todo})`,
        backgroundSize: 'cover',
    }
    const onlineShopStyle = {
        backgroundImage: `url(${shop})`,
        backgroundSize: 'cover',
    }

    const projects = [
        {title: 'Social network', link: 'https://olgakapskaya.github.io/Samurai-way/', style: socialStyle},
        {title: 'Todolist', link: '', style: todoStyle},
        {title: 'Online store', link: 'https://olgakapskaya.github.io/online_store/#/catalog', style: onlineShopStyle}
    ]
    return (
        <section className={s.projectsContainer} id={'projectsPage'}>
            <div className={`${container.container} ${s.projectsBlock}`}>
                <Title title='Projects' description='Projects description will be here'/>
                <div className={s.projects}>
                    {projects.map( elem => <Project title={elem.title} style={elem.style} link={elem.link}/>)}
                </div>
            </div>
        </section>
    )
}