import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import SingleCocktail from "./SingleCocktail";

const CocktailsList = (props) => {
  return (
    <Fragment>
      {props.cocktails.drinks.map((drink) => {
        return (
          <NavLink key={drink.idDrink} to={`/cocktails/${drink.idDrink}`}>
            <SingleCocktail key={drink.idDrink} drink={drink} />
          </NavLink>
        );
      })}
    </Fragment>
  );
};

export default CocktailsList;
