import React, { Fragment } from "react";
import SingleCocktail from "./SingleCocktail";

const CocktailsList = (props) => {
  return (
    <Fragment>
      {props.cocktails.drinks.map((drink) => {
        return <SingleCocktail key={drink.idDrink} drink={drink} />;
      })}
    </Fragment>
  );
};

export default CocktailsList;
