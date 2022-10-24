import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Cocktails from "./components/Cocktails";

function App() {
  const [cocktails, setCocktails] = useState();
  const [userInput, setUserInput] = useState("martini");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchCocktails = useCallback(async (search) => {
    setLoading(true);
    setError(null);
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
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCocktails(userInput);
  }, [userInput, fetchCocktails]);

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
      {/* {cocktails &&
        cocktails.drinks.map((drink) => {
          return <Cocktails key={drink.idDrink} drink={drink} />;
        })} */}
      {/* https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx */}
      {error ? <div>Error: {error}</div> : null}
      {loading ? <div>Loading...</div> : null}
      {cocktails && cocktails.drinks !== null ? (
        cocktails.drinks.map((drink) => {
          return <Cocktails key={drink.idDrink} drink={drink} />;
        })
      ) : (
        <p>No cocktails found</p>
      )}
    </div>
  );
}

export default App;
