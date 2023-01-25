import React, { FunctionComponent, useState } from "react";
import { Button } from "../Button";
import { Item } from "./Item";
import { useNavigate } from "react-router";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IconType } from "react-icons";
import { IconSize } from "../Icon";
import styles from "./Menu.module.scss";

type Props = {};

type MenuItem = {
  title: string;
  iconType: IconType;
  iconSize: IconSize;
  onClick: () => void;
};

export const Menu: FunctionComponent<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClickHandler = () => setIsOpen(!isOpen);

  const onSettingsClick = () => {
    navigate("/settings");
  };

  const onLogoutClick = () => {
    // TODO LOGOUT THE USER
    navigate("/login");
  };

  const menuItems: MenuItem[] = [
    {
      title: "Settings",
      iconType: IoMdSettings,
      iconSize: "s",
      onClick: onSettingsClick,
    },
    {
      title: "Logout",
      iconType: MdLogout,
      iconSize: "s",
      onClick: onLogoutClick,
    },
  ];

  return (
    <div className={styles.container}>
      <Button title="Username" onClick={onClickHandler} />
      {isOpen && (
        <div className={styles.dropdown}>
          {menuItems.map((item) => (
            <Item {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
