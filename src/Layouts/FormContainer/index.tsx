import React, { PropsWithChildren, FunctionComponent } from "react";
import styles from "./FormContainer.module.scss";

type Props = PropsWithChildren<{}>;

export const FormContainer: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
