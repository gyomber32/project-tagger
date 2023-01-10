import React, { FunctionComponent } from "react";
import no_photo from "../../Assets/no_photo.jpg";
import styles from "./Card.module.scss";

type Props = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  image: string;
  description?: string;
};

export const Card: FunctionComponent<Props> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} src={image || no_photo} />
      <div className={styles.content}>
        <div className={styles.title}>{title || ""}</div>
        <p className={styles.description}>{description || ""}</p>
      </div>
    </div>
  );
};
