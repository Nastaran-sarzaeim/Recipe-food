import React from "react";
import styles from "./foodItem.module.css";
function FoodItem({ food, setFoodId }) {
  function clickedRecipeBtn() {
    setFoodId(food.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      <div className={styles.container}>
        <img src={food.image} alt={food.title} className={styles.imgFood} />
        <h3 className={styles.titleFood}>{food.title}</h3>
        <div className={styles.btnContainer}>
          <button className={styles.btnShowRecipe} onClick={clickedRecipeBtn}>
            View recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
