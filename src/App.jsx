import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import RecipeFood from "./components/RecipeFood"
import Category from "./components/Category"


import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <>
      <Header />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Category />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <RecipeFood foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
