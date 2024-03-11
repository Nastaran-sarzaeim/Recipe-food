import React from "react";
import styles from "./foodItem.module.css";
function FoodItem({ food }) {
  return (
    <div className={styles.container}>

      <img src={food.image} alt={food.title} className={styles.img} />
      <div className={styles.details}>
        <p>{food.title}</p>
        <button className={styles.btn}>View recipe</button>
      </div>
    </div>
  );
}

export default FoodItem;
