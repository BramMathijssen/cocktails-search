import React from "react";

const CocktailDetails = ({ cocktail }) => {
  //https://masteringjs.io/tutorials/fundamentals/filter-key
  const getIngredients = () => {
    if (cocktail) {
      // Takes all ingredient fields which are not null from the cocktails object and returns them as an array
      const ingredientsArr = Object.entries(cocktail).filter(
        ([key, value]) => key.includes("strIngredient") && value !== null
      );

      // flattens the array structure and only takes the uneven indexes (1,3,5,7, etc..), which are the ingredients
      const flatIngredientsArr = ingredientsArr.flat().filter((val, index) => {
        return index % 2 !== 0;
      });

      return flatIngredientsArr;
    }
  };

  const ingredients = getIngredients();

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
        {ingredients.map((val) => (
          <li>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailDetails;
