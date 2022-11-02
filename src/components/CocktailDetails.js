import React from "react";

const CocktailDetails = ({ cocktail }) => {
  return (
    <div className="cocktail-detail">
      <div className="cocktail-detail__image">
        <img src={cocktail.strDrinkThumb} alt="drink"></img>
      </div>
      <p>Name: {cocktail.strDrink}</p>
      <p>Type: {cocktail.strAlcoholic}</p>
      <p>Instructions: {cocktail.strInstructions}</p>
      <p>Ingredients</p>

      <ul>
        <li>{cocktail.strIngredient1}</li>
        <li>{cocktail.strIngredient2}</li>
        <li>{cocktail.strIngredient3}</li>
        <li>{cocktail.strIngredient4}</li>
        <li>{cocktail.strIngredient5}</li>
      </ul>
    </div>
  );
};

export default CocktailDetails;
