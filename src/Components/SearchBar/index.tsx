import React, { FunctionComponent, useState } from "react";
import { Project } from "../../Types";
import { Scroll } from "./Scroll";
import { SearchList } from "./SearchList";
import styles from "./SearchBar.module.scss";
import { SearchElement } from "./SearchElement";

type Props = {
  projects: Project[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const SearchBar: FunctionComponent<Props> = ({ projects, onClick }) => {
  const [searchField, setSearchField] = useState("");

  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchField.toLowerCase()) ||
      project.description.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
  };

  function searchList() {
    if (!filteredProjects?.length) {
      return <SearchElement title="Project not found"/>;
    }

    return (
      <Scroll>
        <SearchList filteredProjects={filteredProjects} onClick={onClick} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="pa2">
        <input
          className="p"
          type="search"
          placeholder="Search project"
          onChange={handleChange}
        />
      </div>
      {searchField?.length >= 3 && searchList()}
    </section>
  );
};
