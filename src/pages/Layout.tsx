import React from "react";
import Header from "../components/UI/Header/Header";
import Navigation from "../components/UI/Navigation/Navigation";

import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.style}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Header>
            <Navigation></Navigation>
          </Header>
          <main className={styles["main__content"]}>{children}</main>
          {/*<Footer />*/}
        </div>
      </div>
    </div>
  );
};

export default Layout;
