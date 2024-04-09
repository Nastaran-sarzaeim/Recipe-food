import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import RecipeFood from "./components/RecipeFood"
import Category from "./components/Category"


import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <>
      <Header />
      <Search setFoodData={setFoodData} query={query} setQuery={setQuery} />
      <Category setQuery={setQuery} />
      <div className='container'>
      <FoodList foodData={foodData} setFoodId={setFoodId} />
      <RecipeFood foodId={foodId} />
      </div>
    </>
  );
}

export default App;
