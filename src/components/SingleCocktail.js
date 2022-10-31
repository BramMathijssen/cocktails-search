import "./SingleCocktail.scss";

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
      <div className="cocktail__content">
        <p className="cocktail__name " key={props.idDrink}>
          {props.drink.strDrink}
        </p>
      </div>
    </div>
  );
};

export default SingleCocktail;
