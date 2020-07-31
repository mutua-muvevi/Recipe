import React from "react";
import "./Recipes.css";
import { Link } from "react-router-dom";

const Recipes = (props) => {
  return (
    <div>
      <Link to={`/recipe/${props.title}`}>
        <div className="recipes">
          <h2>{props.title}</h2>
          <p> Calories :{props.calories} </p>
          <img src={props.image} alt="{props.title}" />
        </div>
      </Link>
    </div>
  );
};

export default Recipes;
