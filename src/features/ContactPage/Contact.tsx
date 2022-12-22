import s from './Contact.module.scss'
import container from '../../common/styles/Container.module.scss';
import {FC, useRef, useState} from 'react';
import {ButtonComponent} from '../../common/components/Button/ButtonComponent';
import {Title} from '../../common/components/Title/Title';
import emailjs from '@emailjs/browser';
import {useFormik} from 'formik';
import {SnackBar} from "../../common/components/SnackBar/SnackBar";

interface Values {
    name: string;
    email: string;
    message: string;
}

export const Contact: FC = () => {
    const [snackbarMessage, setSnackbarMessage] = useState<string>('')
    const [snackbarShow, setSnackbarShow] = useState<boolean>(false)
    const [snackbarType, setSnackbarType] = useState<'success' | 'error'>('success')
    const [onDisabled, setOnDisabled] = useState<boolean>(false)

    const form = useRef<HTMLFormElement>(null);
    const formik = useFormik<Values>({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            setOnDisabled(true)
            emailjs.sendForm('service_yj79zmk' , 'template_wecj886', form.current ? form.current : '',  'Q5B3qmXHQDaJp8P6G')
                .then((res) => {
                    setSnackbarMessage('Message send')
                    setSnackbarType('success')
                })
                .catch((e) => {
                    setSnackbarMessage('Something went wrong')
                    setSnackbarType('error')
                })
                .finally(() => {
                    setSnackbarShow(true)
                    setOnDisabled(false)
                })
        },
    });

    return (
        <section className={s.contactContainer} id='contactPage'>
            <div className={`${container.container} ${s.containerFormAndData}`}>
                <Title title='contact'
                       description='I am available for freelance work. Connect with me via phone: +375 (29) 592 16 01 or email: olikbuko@gmail.com'/>

                <form ref={form} className={s.form} onSubmit={formik.handleSubmit}>
                    <input className={s.input}
                           placeholder='Your name'
                           type='text'
                           id='name'
                           name='name'
                           value={formik.values.name}
                           onChange={formik.handleChange}
                    />
                    <input className={s.input}
                           placeholder='Your email'
                           type='text'
                           id='email'
                           name='email'
                           value={formik.values.email}
                           onChange={formik.handleChange}
                    />
                    <textarea className={s.input}
                              placeholder='Your message'
                              id='message'
                              name='message'
                              value={formik.values.message}
                              onChange={formik.handleChange}
                    />
                    <ButtonComponent title='send message' type='submit' disabled={onDisabled}/>
                </form>
                <SnackBar show={snackbarShow} type={snackbarType} message={snackbarMessage}/>
            </div>

        </section>
    )
}