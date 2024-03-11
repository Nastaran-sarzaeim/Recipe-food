import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import { BsSearch } from "react-icons/bs";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "5f9101b15e384a9b871f73fd0fbeed2d";
function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("salad");

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
