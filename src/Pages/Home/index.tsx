import React, { FunctionComponent, ReactNode } from "react";
import { Card } from "../../Components";
import { projects } from "../../Data/projects";
import { MainLayout } from "../../Layouts/MainLayout";
import { Image } from "../../Types/Project";
import styles from "./Home.module.scss";

const getThumbnailPhoto = (images: Image[]) =>
  images.find((image) => image.isThumbnail === true)?.path || "";

export const HomePage = () => {
  return (
    <div className={styles.root}>
      <MainLayout>
        {projects.map(({ id, title, description, images }) => (
          <Card
            key={id}
            title={title}
            description={description}
            image={getThumbnailPhoto(images)}
            onClick={() => {}}
          ></Card>
        ))}
      </MainLayout>
    </div>
  );
};
