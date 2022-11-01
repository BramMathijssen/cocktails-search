import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

const CocktailDetailsPage = () => {
  const [cocktails, setCocktails] = useState();
  const [userInput, setUserInput] = useState("martini");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const params = useParams();

  const fetchCocktailById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params}`
      );
      const data = await res.json();
      setCocktails(data);
      console.log(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCocktailById(userInput);
  }, [userInput, fetchCocktailById]);

  return (
    <div>
      <p>This is the details page</p>
      <p>Details page for cocktail with Id {`${params.cocktailId}`}</p>
    </div>
  );
};

export default CocktailDetailsPage;
