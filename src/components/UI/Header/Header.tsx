import React from "react";
import styles from "./Header.module.css";

const Header = ({ children }: { children: React.ReactNode }) => {
  return <header className={styles.style}>{children}</header>;
};

export default Header;
