import React, { useEffect, useState } from "react";
import styles from "./recipeFood.module.css";
import { BsClock, BsPeopleFill, BsCash, BsStarFill } from "react-icons/bs";
import ItemRecipeList from "./ItemRecipeList";

function RecipeFood({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isIngredients, setIsIngredients] = useState(true);

  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "5f9101b15e384a9b871f73fd0fbeed2d";
  useEffect(() => {
    async function foodDetails() {
      const response = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await response.json();
      setFood(data);
      setIsLoading(false);
    }
    foodDetails();
  }, [foodId]);
  function changeToIngredient() {
    setIsIngredients(true);
  }
  function changeToInstructions() {
    setIsIngredients(false);
  }
  return (
    <>
      <div>
        <div className={styles.containerInformation}>
          <img src={food.image} className={styles.img} />
          {isLoading ? (
            <p>No data !</p>
          ) : (
            <div className={styles.container}>
              <div className={styles.title}>{food.title}</div>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <div className={styles.iconDetails}>
                    <BsClock className={styles.icon} />
                  </div>
                  <div className={styles.textDetails}>
                    {food.readyInMinutes} m
                  </div>
                </div>
                <div className={styles.detail}>
                  <div className={styles.iconDetails}>
                    <BsPeopleFill className={styles.icon} />
                  </div>

                  <div className={styles.textDetails}>{food.servings}</div>
                </div>
                <div className={styles.detail}>
                  <div className={styles.iconDetails}>
                    <BsCash className={styles.icon} />
                  </div>
                  <div className={styles.textDetails}>
                    {(food.pricePerServing / 100).toFixed(2)}
                  </div>
                </div>
                <div className={styles.detail}>
                  <div className={styles.iconDetails}>
                    <BsStarFill className={styles.icon} />
                  </div>
                  <div className={styles.textDetails}>{food.healthScore}</div>
                </div>
              </div>
              <div className={styles.containerBtnChange}>
                <button
                  className={styles.btnChange}
                  onClick={changeToIngredient}
                >
                  Ingredients
                </button>
                <button
                  className={styles.btnChange}
                  onClick={changeToInstructions}
                >
                  Instructions
                </button>
              </div>
              {isIngredients ? (
                <div className={styles.ingredients}>
                  <ItemRecipeList food={food} isLoading={isLoading} />
                </div>
              ) : (
                <div className={styles.instructions}>
                  {/* <h3>Instructions</h3> */}
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    food.analyzedInstructions[0].steps.map((step) => (
                      <li className={styles.instruction}>{step.step}</li>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RecipeFood;
