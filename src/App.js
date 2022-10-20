import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cocktails, setCocktails] = useState();
  const [userInput, setUserInput] = useState("martini");

  const fetchCocktails = async (search) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );

    const data = await res.json();
    setCocktails(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCocktails(userInput);
  }, [userInput]);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="App">
      <h1> Cocktails& Co </h1>
      <input
        type="text"
        defaultValue={userInput}
        onChange={handleInput}
      ></input>
      {cocktails &&
        cocktails.drinks
          // .filter((drink) => {
          //   console.log(
          //     `in filter for ${drink.strDrink}, inputRef is ${userInput}`
          //   );
          //   return drink.strDrink.startsWith(userInput);
          // })
          .map((drink) => {
            console.log(`in map for ${drink}`);
            return (
              <div className="cocktail">
                <img className="cocktail__image "src={drink.strDrinkThumb} alt='drink'></img>
                <p className="cocktail__name "key={drink.idDrink}>drink: {drink.strDrink}</p>
              </div>
            );
          })}
    </div>
  );
}

export default App;
