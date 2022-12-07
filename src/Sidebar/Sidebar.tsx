import {FC, memo} from 'react';
import style from './Sidebar.module.scss'
import {NavLink} from 'react-router-dom';
import {IoCloseSharp} from '@react-icons/all-files/io5/IoCloseSharp';

type SidebarProps = {
    open: boolean
    handleClose: () => void
}
export const Sidebar: FC<SidebarProps> = memo(({open, handleClose}) => {
    const sidebarClass = style.sidebar + (open ? ' ' + style.open : '')
    return (
        <>
            {open && <div className={style.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <IoCloseSharp onClick={handleClose} className={style.closeIcon}/>
                <nav className={style.nav}>
                    <NavLink to='/main'
                             className={({isActive}) => isActive ? style.active : ''}
                             onClick={handleClose}>
                        Home
                    </NavLink>
                    <NavLink to='/skills'
                             className={({isActive}) => isActive ? style.active : ''}
                             onClick={handleClose}>
                        Skills
                    </NavLink>
                    <NavLink to='/projects'
                             className={({isActive}) => isActive ? style.active : ''}
                             onClick={handleClose}>
                        Projects
                    </NavLink>
                    <NavLink to='/contact'
                             className={({isActive}) => isActive ? style.active : ''}
                             onClick={handleClose}>
                        Contact
                    </NavLink>
                </nav>
            </aside>
        </>
    )
})