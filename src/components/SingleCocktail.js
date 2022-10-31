import "./../App.css";

const SingleCocktail = (props) => {
  console.log(`hey from SingleCocktail2`);
  console.log(props);
  return (
    <div className="cocktail">
      <img
        className="cocktail__image "
        src={props.drink.strDrinkThumb}
        alt="drink"
      ></img>
      <p className="cocktail__name " key={props.idDrink}>
        drink: {props.drink.strDrink}
      </p>
    </div>
  );
};

export default SingleCocktail;