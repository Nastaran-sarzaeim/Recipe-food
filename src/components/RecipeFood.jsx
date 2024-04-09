import React, { useEffect, useState } from "react";
import styles from "./recipeFood.module.css";
import { BsClock, BsPeopleFill, BsCash, BsStarFill } from "react-icons/bs";
import ItemRecipeList from "./ItemRecipeList";

function RecipeFood({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isIngredients, setIsIngredients] = useState(true);

  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "44b14a3ad7024a39af85710f57e959f1";
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
  const foodPricePerServing = Math.floor(food.pricePerServing);
  const detials = [
    { icon: <BsClock className={styles.icon} />, name: food.readyInMinutes },
    { icon: <BsPeopleFill className={styles.icon} />, name: food.servings },
    { icon: <BsCash className={styles.icon} />, name: foodPricePerServing },
    { icon: <BsStarFill className={styles.icon} />, name: food.healthScore },
  ];
  console.log(detials);
  return (
    <>
      <div>
        {isLoading ? (
          ""
        ) : (
          <div className={styles.containerInformation}>
            <img src={food.image} className={styles.img} />
            <div className={styles.container}>
              <div className={styles.title}>{food.title}</div>
              <div className={styles.details}>
                {detials.map((detail) => {
                  return (
                    <div className={styles.detail}>
                      <div className={styles.iconDetails}>{detail.icon}</div>
                      <div className={styles.textDetails}>{detail.name}</div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.containerBtnChange}>
                <button
                  className={`${styles.btnChange}  ${
                    isIngredients ? styles.active : ""
                  }`}
                  onClick={changeToIngredient}
                >
                  Ingredients
                </button>
                <button
                  className={`${styles.btnChange}  ${
                    isIngredients ? "" : styles.active
                  }`}
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
                  {/* <hr /> */}
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    food.analyzedInstructions[0].steps.map((step) => (
                      <li className={styles.instruction}>
                        {step.step} <hr />
                      </li>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default RecipeFood;
