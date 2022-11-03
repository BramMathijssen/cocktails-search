import { NavLink } from "react-router-dom";
import CocktailType from "./CocktailType";
import "./SingleCocktail.scss";

const SingleCocktail = (props) => {
  console.log(`hey from SingleCocktail2`);
  console.log(props);
  return (
    <div className="cocktail">
      <NavLink
        key={props.drink.idDrink}
        to={`/cocktails/${props.drink.idDrink}`}
      >
        <div className="cocktail__container">
          <img
            className="cocktail__image "
            src={props.drink.strDrinkThumb}
            alt="drink"
          ></img>
          <div className="cocktail__content">
            <p className="cocktail__name " key={props.idDrink}>
              {props.drink.strDrink}
            </p>
            <CocktailType
              className={"cocktail__type"}
              type={props.drink.strAlcoholic}
            />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SingleCocktail;
