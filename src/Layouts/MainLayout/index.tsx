import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
} from "react";
import { Header, Sidebar } from "../../Components";
import styles from "./MainLayout.module.scss";

type Props = PropsWithChildren<{}>;

export const MainLayout = ({ children }: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};
