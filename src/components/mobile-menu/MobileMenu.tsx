import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./MobileMenu.module.scss";
import { SITE_NAVIGATION } from "../../constants/site-navigation";
import { RouteType } from "../../typings/Route";
import { CloseIcon } from "../icons";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
  isOpen,
  closeMenu,
}: MobileMenuProps) => {
  return (
    <div
      className={classnames(styles.mobileMenu, {
        [styles.mobileMenu__active]: isOpen,
      })}
    >
      <button onClick={closeMenu} className={styles.mobileMenu__closeButton}>
        <CloseIcon />
      </button>
      <ul>
        {SITE_NAVIGATION.map((route: RouteType) => (
          <li key={route.name} className={styles.mobileMenu__item}>
            <a href={route.link} className={styles.mobileMenu__item__link}>
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
