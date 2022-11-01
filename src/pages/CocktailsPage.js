import { useState, useEffect, useCallback } from "react";
import SearchCocktails from "../components/SearchCocktails";
import CocktailsList from "../components/CocktailsList";

const CocktailsPage = () => {
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
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCocktails(userInput);
  }, [userInput, fetchCocktails]);

  const userInputHandler = (enteredInput) => {
    setUserInput(enteredInput);
  };

  return (
    <div className="App">
      <h1 className="title"> Cocktails & Co </h1>
      <SearchCocktails
        userInputHandler={userInputHandler}
        defaultValue={userInput}
      />
      {/* {cocktails &&
            cocktails.drinks.map((drink) => {
              return <Cocktails key={drink.idDrink} drink={drink} />;
            })} */}
      {/* https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx */}
      {error ? <div>Error: {error}</div> : null}
      {loading ? <div>Loading...</div> : null}
      {cocktails && cocktails.drinks !== null ? (
        <CocktailsList cocktails={cocktails} />
      ) : (
        <p>No cocktails found</p>
      )}
    </div>
  );
};

export default CocktailsPage;
