import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./App.css"

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  );
}

export default App;
