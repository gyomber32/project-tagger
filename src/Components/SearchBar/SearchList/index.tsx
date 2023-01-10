import React, { FunctionComponent } from "react";
import { SearchElement } from "../SearchElement";
import { Project } from "../../../Types";

type Props = {
  filteredProjects: Project[];
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const SearchList: FunctionComponent<Props> = ({
  filteredProjects,
  onClick,
}) => {
  return (
    <ul>
      {filteredProjects.map(({ title }) => (
        <SearchElement title={title} onClick={onClick} />
      ))}
    </ul>
  );
};
