import React, { useState, useEffect } from "react";
import Recipes from "../Recipes/Recipes";
import "./Home.css"

const Homepage = () => {
  const APP_ID = "43c17c19";
  const APP_KEY = "ae4bfe1deee3becfaed920bf71d6abc3";

  const [foods, setFood] = useState([]);

  useEffect(() => {
    getFoodApi();
  }, []);

  const getFoodApi = async () => {
    const foodData = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );

    const foods = await foodData.json();
    console.log(foods.hits);
    setFood(foods.hits);
  };

  return (
    <div>
      <h1>This is the Homepage</h1>
      <div className="box">
        {foods.map((food) => {
          return (
            <Recipes
              title={food.recipe.label}
              calories={food.recipe.calories}
              image={food.recipe.image}
              key={food.recipe.label}
              ingredients={food.recipe.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
