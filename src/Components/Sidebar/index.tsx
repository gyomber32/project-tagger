import React, { FunctionComponent } from "react";
import { Item } from "./Item";
import { IoMdDocument } from "react-icons/io";
import styles from "./Sidebar.module.scss";
import { useLocation } from "react-router";

type Props = {};

export const Sidebar: FunctionComponent<Props> = () => {
  const location = useLocation();
  return (
    <div className={styles.sidebar}>
      <Item
        title="Projects"
        iconType={IoMdDocument}
        iconSize="s"
        url="/"
        isActive={location.pathname === "/"}
      />
      <Item
        title="Test1"
        iconType={IoMdDocument}
        iconSize="s"
        url="/project/new"
        isActive={location.pathname === "/project/new"}
      />
      <Item
        title="Test2"
        iconType={IoMdDocument}
        iconSize="s"
        url="/login"
        isActive={location.pathname === "/login"}
      />
    </div>
  );
};
