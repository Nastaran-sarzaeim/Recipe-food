import React, { useState, useEffect } from "react";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "b86bf3594eb5450a89d44ef1914996e7";
function Search({foodData , setFoodData}) {
  const [query, setQuery] = useState("pasta");

  useEffect(() => {
    async function demo() {
      const response = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results)
    }
    demo();
  }, [query]);

  return (
    <>
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;
