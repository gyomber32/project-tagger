import React from "react";
import { IconType } from "react-icons";
import { Icon, IconSize } from "../Icon";
import styles from "./Button.module.scss";

type Props = {
    title?: string;
    iconType?: IconType;
    iconSize?: IconSize;
    iconColor?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<Props> = ({title, iconType, iconSize, iconColor, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {iconType && <div><Icon IconType={iconType} size={iconSize} color={iconColor}/></div>}
            {title && <div>{title}</div>}
        </button>
    )
}
