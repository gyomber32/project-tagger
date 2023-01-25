import React, { FunctionComponent } from "react";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router";
import { Icon, IconSize } from "../../Icon";
import classnames from "classnames";
import styles from "./Item.module.scss";

type Props = {
  title: string;
  isActive: boolean;
  url: string;
  iconType: IconType;
  iconSize: IconSize;
  iconColor?: string;
};

export const Item: FunctionComponent<Props> = ({
  title,
  isActive,
  url,
  iconType,
  iconSize,
  iconColor,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={classnames(styles.item, isActive && styles.active)}
      onClick={() => {
        !isActive && navigate(url);
      }}
    >
      {iconType && (
        <div className={styles.item}>
          <Icon IconType={iconType} size={iconSize} color={iconColor} />
        </div>
      )}
      {title}
    </div>
  );
};
