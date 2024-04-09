// import React from "react";
import styles from "./category.module.css";

function Category({ setQuery }) {
  const foodArray = ["chicken", "meat", "pasta", "pizza", "salad", "rice"];
  return (
    <div>
      <div className={styles.details}>
        {foodArray.map((food) => {
          return (
            <div className={styles.detail}>
              <button className={styles.btnCategory} onClick={() => setQuery(food)}>
                <img src={`../../public/${food}.jpg`} className={styles.img} title={food}/>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
