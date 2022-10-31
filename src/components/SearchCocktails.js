import React, { Fragment, useState } from "react";

const SearchCocktails = (props) => {
  const [userInput, setUserInput] = useState("martini");

  const onChangeHandler = (event) => {
    props.userInputHandler(event.target.value)
    //setUserInput(event.target.value);
  };

  return (
    <Fragment>
      <input
        type="text"
        defaultValue={userInput}
        onChange={onChangeHandler}
      ></input>
    </Fragment>
  );
};

export default SearchCocktails;
