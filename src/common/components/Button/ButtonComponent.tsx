import {FC, memo} from 'react';
import s from './ButtonComponent.module.scss'

type ButtonComponentProps = {
    title: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset' | undefined
    disabled?: boolean
}
export const ButtonComponent: FC<ButtonComponentProps> = memo(({
                                                              title,
                                                              onClick,
                                                              type,
                                                              disabled
                                                          }) => {
    return (
        <button className={s.button} type={type} disabled={disabled}> {title} </button>
    )
})