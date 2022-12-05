import React from "react";
import s from './ContactButtonGroup.module.css'

import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";


export const ContactButtonGroup = () => {
    return (
        <div className={s.iconsContainer}>

            <a href={'https://www.linkedin.com/in/olga-kapskaya-87991b250/'} target='_blank' rel='noreferrer'>
                <AiFillLinkedin className={s.icon}/>
            </a>

            <a href={'#contactPage'}>
                <AiOutlineMail className={s.icon}/>
            </a>

            <a href={'https://github.com/OlgaKapskaya'} target='_blank' rel='noreferrer'>
                <AiFillGithub className={s.icon}/>
            </a>

            <a href={'https://t.me/OlgaKapskaya'} target='_blank' rel='noreferrer'>
                <FaTelegramPlane className={s.icon}/>
            </a>

        </div>
    )
}