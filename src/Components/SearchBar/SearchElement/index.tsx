import React, { FunctionComponent } from "react";
import styles from "./SearchElement.module.scss";

type Props = {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const SearchElement: FunctionComponent<Props> = ({ title, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {title}
    </div>
  );
};
