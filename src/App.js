import "./App.css";
import { useEffect, useRef, useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";

function App() {
  const [cocktails, setCocktails] = useState();
  const [userInput, setUserInput] = useState("");

  const fetchCocktails = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );

    const data = await res.json();
    setCocktails(data);

    return data;
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="App">
      <h1> Cocktails& Co </h1>
      <input type="text" onChange={handleInput}></input>
      {cocktails &&
        cocktails.drinks
          .filter((drink) => {
            console.log(
              `in filter for ${drink.strDrink}, inputRef is ${userInput}`
            );
            return drink.strDrink.startsWith(userInput);
          })
          .map((drink, index) => {
            console.log(`in map for ${drink}`);
            return (
              <p key={drink.idDrink}>
                {" "}
                index: {index} strength: {drink.strDrink}
              </p>
            );
          })}
    </div>
  );
}

export default App;
