import s from './Contact.module.css'
import container from "../common/styles/Container.module.css";
import React from "react";

export const Contact = () => {
    return(
        <div className={s.contactContainer}>
            <div className={container.container}>
                <div className={s.inputForm}>
                    <h2>I Am Available For Freelance</h2>
                    <div className={s.form}>
                        <input placeholder={'name'}/>
                        <input placeholder={'email'}/>
                        <textarea placeholder={'text'}/>
                        <button> send </button>
                    </div>


                </div>
                <div className={s.contactAddress}>
                    <h2>Contact Address</h2>
                    <div className={s.address}> address</div>
                    <div className={s.email}> email</div>
                    <div className={s.phones}> phones</div>
                </div>
            </div>
        </div>
    )
}