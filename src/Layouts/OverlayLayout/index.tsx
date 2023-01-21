import React, { PropsWithChildren } from "react";
import styles from "./OverlayLayout.module.scss";

type Props = PropsWithChildren<{ isOpen: boolean; onClose?: () => void }>;

export const OverlayLayout: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
}) => {
  return isOpen ? (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      {children}
    </>
  ) : (
    <>{children}</>
  );
};
