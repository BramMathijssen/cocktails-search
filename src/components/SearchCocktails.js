import React, { Fragment } from "react";

const SearchCocktails = (props) => {

  const onChangeHandler = (event) => {
    props.userInputHandler(event.target.value)
  };

  return (
    <Fragment>
      <input
        type="text"
        defaultValue={props.defaultValue}
        onChange={onChangeHandler}
      ></input>
    </Fragment>
  );
};

export default SearchCocktails;