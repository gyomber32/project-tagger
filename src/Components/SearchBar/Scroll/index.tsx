import React, { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Scroll.module.scss";

type Props = PropsWithChildren<{}>;

export const Scroll: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
