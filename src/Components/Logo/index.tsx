import React, { FunctionComponent } from "react";
import logo from "../../Assets/logo.png";
import styles from "./Logo.module.scss";

type Props = {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const Logo: FunctionComponent<Props> = ({ onClick }) => {
  return <img className={styles.image} src={logo} onClick={onClick} />;
};
