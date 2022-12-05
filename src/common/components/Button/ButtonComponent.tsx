import {FC} from "react";
import s from './ButtonComponent.module.css'

type ButtonComponentProps = {
    title: string
    onClick: () => void
}
export const ButtonComponent:FC<ButtonComponentProps> = ({title, onClick}) => {
    return (
        <button className={s.button}> {title} </button>
    )
}