import React, { PropsWithChildren } from "react";
import styles from "./Overlay.module.scss";

type Props = PropsWithChildren<{ isOpen: boolean; onClose?: () => void }>;

export const Overlay: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.child}>{children}</div>
    </div>
  );
};
