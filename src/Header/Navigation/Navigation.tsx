import {FC} from 'react';
import s from './Navigation.module.scss'
import {NavLink} from 'react-router-dom';

export const Navigation: FC = () => {
    return (
        <nav className={s.nav}>
            <NavLink to='/main' className={({isActive}) => isActive ? s.active : ''}>Home</NavLink>
            <NavLink to='/skills' className={({isActive}) => isActive ? s.active : ''}>Skills</NavLink>
            <NavLink to='/projects' className={({isActive}) => isActive ? s.active : ''}>Projects</NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? s.active : ''}>Contact</NavLink>
        </nav>
    )
}