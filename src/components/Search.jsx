import React, { useState, useEffect } from "react";
import styles from "./search.module.css";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "b86bf3594eb5450a89d44ef1914996e7";
function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function demo() {
      const response = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    demo();
  }, [query]);

  return (
    <>
      <form>
        <div className={styles.container}>
          <div className={styles.searchBox}>
            <input
              className={styles.search}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="For example pasta"
            />
            <img src="../public/search.svg" alt="" className={styles.icon} />
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
