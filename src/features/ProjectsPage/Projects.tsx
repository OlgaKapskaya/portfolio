import {FC} from 'react';
import s from './Projects.module.scss'
import container from '../../common/styles/Container.module.scss';
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title/Title';
import sn from '../../accets/image/SN.jpeg'
import todo from '../../accets/image/todo.jpeg'
import shop from '../../accets/image/shop.webp'
import {createProjectStyle} from '../../common/utils/utils';
import {LINKS} from '../../common/constants/constants';


export const Projects: FC = () => {
    const socialStyle = createProjectStyle(sn)
    const todoStyle = createProjectStyle(todo)
    const onlineShopStyle = createProjectStyle(shop)

    const projects = [
        {title: 'Social network', demoLink: LINKS.PROJECT_LINKS.SOCIAL_NETWORK_DEMO, style: socialStyle, codeLink: LINKS.PROJECT_LINKS.SOCIAL_NETWORK_CODE},
        {title: 'Todolist', demoLink: LINKS.PROJECT_LINKS.TODO_DEMO, style: todoStyle, codeLink: LINKS.PROJECT_LINKS.TODO_CODE},
        {title: 'Online store', demoLink: LINKS.PROJECT_LINKS.SHOP_DEMO, style: onlineShopStyle, codeLink: LINKS.PROJECT_LINKS.SHOP_CODE}
    ]
    return (
        <section className={s.projectsContainer} id='projectsPage'>
            <div className={`${container.container} ${s.projectsBlock}`}>
                <Title title='Projects' description=''/>
                <div className={s.projects}>
                    {
                        projects.map(elem => <Project title={elem.title}
                                                      style={elem.style}
                                                      demoLink={elem.demoLink}
                                                      codeLink={elem.codeLink}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}