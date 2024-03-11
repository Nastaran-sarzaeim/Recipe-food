import React from "react";
import styles from './header.module.css'

function Header() {
  return (
    <>
      <div className={styles.container}>
        Searching <span className={styles.recipeText}>Resipes</span> Food 🍔
      </div>
    </>
  );
}

export default Header;
