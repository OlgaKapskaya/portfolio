import s from './Main.module.scss'
import container from '../common/styles/Container.module.scss'
import mainPhoto from '../accets/image/photo_to_main.jpg'
import {FC} from 'react';


export const Main: FC = () => {

    return (
        <section className={s.mainContainer} id={'mainPage'}>

            <div className={container.container}>
                <div className={s.about}>
                    <span>HELLO, MY NAME IS</span>
                    <h1>OLGA KAPSKAYA</h1>
                    <span>FRONT-END DEVELOPER BASED IN #MINSK</span>
                </div>
                <img src={mainPhoto} className={s.photo} alt='portfolioMainImg'/>
            </div>
        </section>
    )
}