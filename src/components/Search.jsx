import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import { BsSearch } from "react-icons/bs";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "44b14a3ad7024a39af85710f57e959f1";
function Search({ setFoodData , setQuery , query}) {

  useEffect(() => {
    async function fetchApiFood() {
      const response = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchApiFood();
  }, [query]);

  return (
    <>
      <form>
        <div className={styles.container}>
          <div className={styles.containerSearch}>
            <input
            placeholder="For example pasta"
              className={styles.inputSearch}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <BsSearch className={styles.iconSearch} />
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
