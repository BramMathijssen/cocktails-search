import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import CocktailDetails from "../components/CocktailDetails";

const CocktailDetailsPage = () => {
  const [cocktail, setCocktail] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const params = useParams();

  const fetchCocktailById = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setCocktail(data.drinks[0]);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCocktailById(params.cocktailId);
  }, [params, fetchCocktailById]);



  return (
    <div>
      {console.dir(cocktail)}
      <p>This is the details page</p>

      <p>Details page for cocktail with Id {`${params.cocktailId}`}</p>
      {cocktail && cocktail !== null ? (
        <CocktailDetails cocktail={cocktail} />
      ) : (
        <p>No cocktails found</p>
      )}
    </div>
  );
};

export default CocktailDetailsPage;
