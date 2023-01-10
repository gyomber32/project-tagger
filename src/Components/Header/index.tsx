import React from "react";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import styles from "./Header.module.scss";

import { projects } from "../../Data/projects";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Logo onClick={() => {}} />
      <SearchBar projects={projects} />
      <div>Menu</div>
    </div>
  );
};
