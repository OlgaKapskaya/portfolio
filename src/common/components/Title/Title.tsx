import React, {FC} from "react";
import s from "./Title.module.scss";

type TitleProps = {
    title: string,
    description: string
}
export const Title: FC<TitleProps> = ({title, description}) => {
    return (
        <div className={s.title}>
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
    )
}