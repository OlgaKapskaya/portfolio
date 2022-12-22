import s from './Contact.module.scss'
import container from '../../common/styles/Container.module.scss';
import {FC} from 'react';
import {ButtonComponent} from '../../common/components/Button/ButtonComponent';
import {Title} from '../../common/components/Title/Title';

export const Contact: FC = () => {
    return (
        <section className={s.contactContainer} id='contactPage'>
            <div className={`${container.container} ${s.containerFormAndData}`}>
                    <Title title='contact' description='I am available for freelance work. Connect with me via phone: +375(29) 592 16 01 or email: olikbuko@gmail.com'/>
                    <form className={s.form}>
                        <input className={s.input} placeholder='Your name' type='text'/>
                        <input className={s.input} placeholder='Your email' type='text'/>
                        <textarea className={s.input} placeholder={'Your message'}/>
                        <ButtonComponent title='send message' onClick={() => {}}/>
                    </form>
            </div>
        </section>
    )
}