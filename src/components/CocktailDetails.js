import React from "react";
import "./CocktailDetails.scss";
import { useNavigate } from "react-router-dom";

const CocktailDetails = ({ cocktail }) => {
  const navigate = useNavigate();

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
    <div className="cocktail-details">
      <div className="cocktail-details__image">
        <img src={cocktail.strDrinkThumb} alt="drink"></img>
      </div>
      <div className="cocktail-details__content">
        <div className="content">
          <h2 className="content__title">{cocktail.strDrink}</h2>
            <p className="content__type">{cocktail.strAlcoholic}</p>
          <p className="content__instructions">
            Instructions: {cocktail.strInstructions}
          </p>
          <p className="content__ingredients">Ingredients</p>
          <ul className="content__list">
            {ingredients.map((val) => (
              <li>{val}</li>
            ))}
          </ul>
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default CocktailDetails;
