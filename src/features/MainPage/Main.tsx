import s from './Main.module.scss'
import mainPhoto from '../../accets/image/photo_to_main.jpg'
import {FC} from 'react';
import {ABOUT} from "../../common/constants/constants";


export const Main: FC = () => {

    return (
        <section className={s.mainContainer} id={'mainPage'}>
                <div className={s.about}>
                    <span> HELLO, MY NAME IS </span>
                    <h1> { ABOUT.NAME } </h1>
                    <span>{ ABOUT.POSITION }</span>
                </div>
                <img src={mainPhoto} className={s.photo} alt='portfolioMainImg'/>
        </section>
    )
}