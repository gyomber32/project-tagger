import React, { FunctionComponent } from "react";
import { IconType } from "react-icons/lib";
import { Icon, IconSize } from "../../Icon";
import styles from "./Item.module.scss";

type Props = {
  title: string;
  iconType: IconType;
  iconSize: IconSize;
  iconColor?: string;
  onClick: () => any;
};

export const Item: FunctionComponent<Props> = ({
  title,
  onClick,
  iconType,
  iconSize,
  iconColor,
}) => {
  return (
    <div className={styles.item} onClick={onClick}>
      {iconType && (
        <div className={styles.item}>
          <Icon IconType={iconType} size={iconSize} color={iconColor} />
        </div>
      )}
      {title}
    </div>
  );
};
