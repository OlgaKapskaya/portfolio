import React from "react";
import s from './Main.module.scss'
import container from '../common/styles/Container.module.scss'
import {ContactButtonGroup} from "../ContactButtonGroup/ContactButtonGroup";
import mainPhoto from '../accets/image/photo_to_main.jpg'


export const Main = () => {

    return (
        <section className={s.mainContainer} id={'mainPage'}>

            <div className={container.container}>
                <div className={s.about}>
                    <span>HELLO, MY NAME IS</span>
                    <h1>OLGA KAPSKAYA</h1>
                    <span>FRONT-END DEVELOPER BASED IN #MINSK</span>
                    <div className={s.buttonGroup}>
                        <ContactButtonGroup/>

                    </div>

                </div>
                <div className={s.photo}>
                    <img src={mainPhoto} className={s.photoImg} alt='portfolioMainImg'/>
                </div>
            </div>
        </section>
    )
}