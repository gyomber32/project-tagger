import React from "react";
import { Logo } from "../Logo";
import { SearchBar } from "../SearchBar";
import styles from "./Header.module.scss";

import { projects } from "../../Data/projects";

export const Header = () => {
  const navigateToPage = () => {
    // TODO
  };

  return (
    <div className={styles.container}>
      <Logo onClick={() => {}} />
      <SearchBar projects={projects} onClick={navigateToPage} />
      <div>Menu</div>
    </div>
  );
};
