import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Link to="/Pokemons" className={styles.footerLink}>
          <img
            src="\assets\pikachu.png"
            alt="pickachu"
            className={styles.footerIcon}
          />
          {" Pokemons "}
        </Link>
        <Link to="#" className={styles.footerLink}>
          <img
            src="\assets\pokeball.png"
            alt="pokeball"
            className={styles.footerIcon}
          />
          {" Items "}
        </Link>
        <Link to="#" className={styles.footerLink}>
          <img
            src="\assets\pointer.png"
            alt="pokeball"
            className={styles.footerIcon}
          />
          {" Map "}
        </Link>
      </footer>
    </>
  );
};

export default Footer;
