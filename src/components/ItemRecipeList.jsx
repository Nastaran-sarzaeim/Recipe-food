import React from "react";
import styles from "./itemRecipeList.module.css";

function ItemRecipeList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          {food.extendedIngredients.map((ingredient) => {
            return (
              <div>
                <div className={styles.containerIngredients}>
                  <img
                    className={styles.img}
                    src={
                      `https://spoonacular.com/cdn/ingredients_100x100/` +
                      ingredient.image
                    }
                  />
                </div>
                <div className={styles.detailsIngredinets}>
                  <li className={styles.name}>{ingredient.name} </li>
                  <div className={styles.amount}>
                    {ingredient.amount} {ingredient.unit}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ItemRecipeList;
