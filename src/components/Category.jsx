// import React from "react";
import styles from "./category.module.css";
import meat from '../assets/images/meat.jpg'
import chicken from '../assets/images/chicken.jpg'
import rice from '../assets/images/rice.jpg'
import pasta from '../assets/images/pasta.jpg'
import pizza from '../assets/images/pizza.jpg'
import salad from '../assets/images/salad.jpg'

function Category({ setQuery }) {
  const foodArray = [
    { name: "chicken", img: chicken },
    { name: "meat", img: meat },
    { name: "salad", img: salad },
    { name: "rice", img: rice },
    { name: "pizza", img: pizza },
    { name: "pasta", img: pasta }
  ]
  return (
    <div>
      <div className={styles.details}>
        {foodArray.map((food) => {
          return (
            <div className={styles.detail}>
              <button className={styles.btnCategory} onClick={() => setQuery(food.name)}>
                <img src={food.img} className={styles.img} title={food.name} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
