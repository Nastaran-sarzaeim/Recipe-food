import React from "react";
import FoodItem from "./FoodItem";
import styles from "./foodList.module.css";

function FoodList({ foodData, setFoodId }) {
  return (
    <>
      <div className={styles.container}>
        {/* Question */}
        {foodData.map((food) => (
          <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
        ))}
      </div>
    </>
  );
}

export default FoodList;
