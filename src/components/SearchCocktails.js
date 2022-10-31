import React, { Fragment } from "react";
import "./SearchCocktails.scss";

const SearchCocktails = (props) => {
  const onChangeHandler = (event) => {
    props.userInputHandler(event.target.value);
  };

  return (
    <Fragment>
      <div className="searchfield">
        <input
          className="searchfield__input"
          type="text"
          defaultValue={props.defaultValue}
          onChange={onChangeHandler}
        ></input>
        <label className="searchfield__icon">
          <i className="fas fa-search"></i>
        </label>
      </div>
    </Fragment>
  );
};

export default SearchCocktails;
