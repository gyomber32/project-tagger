import React, { FunctionComponent, useState } from "react";
import { Project } from "../../Types";
import { Scroll } from "./Scroll";
import { SearchList } from "./SearchList";
import { SearchElement } from "./SearchElement";
import styles from "./SearchBar.module.scss";

type Props = {
  projects: Project[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const SearchBar: FunctionComponent<Props> = ({ projects, onClick }) => {
  const [searchField, setSearchField] = useState("");

  const filteredProjects = projects.filter(({ title, description }) => {
    return (
      title.toLowerCase().includes(searchField.toLowerCase()) ||
      description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  function searchList() {
    if (!filteredProjects?.length) {
      return <SearchElement title="Project not found" />;
    }

    return (
      <Scroll>
        <SearchList filteredProjects={filteredProjects} onClick={onClick} />
      </Scroll>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          className={styles.input_field}
          type="search"
          placeholder="Search project"
          onChange={handleChange}
        />
      </div>
      {searchField?.length >= 2 && searchList()}
    </div>
  );
};
