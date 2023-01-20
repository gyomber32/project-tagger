import React, { FunctionComponent } from "react";
import styles from "./HasAccount.module.scss";

type Props = {
  hasAccount: boolean;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const HasAccount: FunctionComponent<Props> = ({
  hasAccount,
  onClick,
}) => (
  <a className={styles.account} onClick={onClick}>
    {hasAccount ? "Already registered?" : "No account? Sign up for free!"}
  </a>
);
