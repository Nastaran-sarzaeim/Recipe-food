import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        Searching <span className={styles.recipes}>Resipes</span> Food 🍔
      </div>
    </>
  );
}

export default Header;
