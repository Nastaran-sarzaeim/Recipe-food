import React from "react";
import styles from "./foodItem.module.css";
function FoodItem({ food, setFoodId }) {
  function clickedRecipeBtn() {
    setFoodId(food.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={styles.container}>
      <img src={food.image} alt={food.title} className={styles.imgFood} />
      <div className={styles.details}>
        <p>{food.title}</p>
        <button className={styles.btn} onClick={clickedRecipeBtn}>
          View recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
