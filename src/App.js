import "./App.css";
import { useEffect, useState } from "react";
import Cocktails from "./components/Cocktails";

function App() {
  const [cocktails, setCocktails] = useState();
  const [userInput, setUserInput] = useState("martini");


  const fetchCocktails = async (search) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setCocktails(data);
      console.log(data);
      console.log(`in try block`);
    } catch (error) {
      console.log(`in catch block`);
    }
  };

  useEffect(() => {
    fetchCocktails(userInput);
  }, [userInput]);

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="App">
      {console.log(`cocktails`)}
      {console.log(cocktails)}
      <h1> Cocktails& Co </h1>
      <input
        type="text"
        defaultValue={userInput}
        onChange={handleInput}
      ></input>

      {/* {cocktails &&
        cocktails.drinks.map((drink) => {
          return <Cocktails key={drink.idDrink} drink={drink} />;
        })} */}

      {/* https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx */}
      {cocktails
        ? cocktails.drinks.map((drink) => {
            return <Cocktails key={drink.idDrink} drink={drink} />;
          })
        : null}
    </div>
  );
}

export default App;
