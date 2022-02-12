import React, { FunctionComponent, useState } from "react";
import styles from "./Header.module.scss";
import { HamburgerIcon, CartIcon } from "../icons";
import Logo from "../logo";
import Avatar from "../avatar";
import MobileMenu from "../mobile-menu";
import { SITE_NAVIGATION } from "../../constants/site-navigation";
import { RouteType } from "../../typings/Route";

const Header: FunctionComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const openMobileMenu = () => setMobileMenuOpen(true);

  const closeMenu = () => setMobileMenuOpen(false);

  const openCartDropdown = () => {};
  return (
    <>
      <MobileMenu isOpen={mobileMenuOpen} closeMenu={closeMenu} />
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.nav__left}>
            <button className={styles.nav__hamburger} onClick={openMobileMenu}>
              <HamburgerIcon />
            </button>
            <Logo />
            <ul className={styles.nav__list}>
              {SITE_NAVIGATION.map((route: RouteType) => (
                <li key={route.name} className={styles.nav__list__item}>
                  <a className={styles.nav__list__item__link} href={route.link}>
                    {route.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.nav__right}>
            <button className={styles.nav__cart} onClick={openCartDropdown}>
              <CartIcon showBadge />
            </button>
            <Avatar />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
