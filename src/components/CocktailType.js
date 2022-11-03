import React, { Fragment, useCallback, useEffect, useState } from "react";
import "./CocktailType.scss";

const CocktailType = (props) => {
  const [alcohol, setAlcohol] = useState(true);
  console.log(props);

  const setType = useCallback(() => {
    if (props.type.includes("Non")) {
      setAlcohol(false);
    }
  });

  useEffect(() => {
    setType();
  }, [setType]);

  return (
    <Fragment>
      <p className={`type ${alcohol ? "alcoholic" : "non-alcoholic"}`}>
        {props.type}
      </p>
    </Fragment>
  );
};

export default CocktailType;
