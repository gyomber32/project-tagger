import React, { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import { Icon, IconSize } from "../Icon";
import classnames from "classnames";
import styles from "./Button.module.scss";

type ButtonType = "submit" | "reset" | "button" | undefined;

type Props = {
  className?: string;
  title?: string;
  type?: ButtonType;
  iconType?: IconType;
  iconSize?: IconSize;
  iconColor?: string;
  onClick?: (any: any) => void;
};

export const Button: React.FC<Props> = ({
  className,
  title,
  type,
  iconType,
  iconSize,
  iconColor,
  onClick,
}) => {
  console.log(className);
  return (
    <button
      className={classnames(styles.button, className)}
      type={type}
      onClick={onClick}
    >
      {iconType && (
        <div>
          <Icon IconType={iconType} size={iconSize} color={iconColor} />
        </div>
      )}
      {title}
    </button>
  );
};
