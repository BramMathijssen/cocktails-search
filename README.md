# Cocktails Search engine

![](https://github.com/BramMathijssen/cocktails-search/blob/master/public/cocktails.gif)

## Description

This project uses the API from https://www.thecocktaildb.com/api.php to create an cocktails search engine.
Cocktails can be entered in the search bar and all matching results will appear including if they are alcoholic or not.
When the result is pressed a detailed view of the cocktail is presented with all the ingredients and instructions on how to prepare it.


## Technologies
- React
- React Router v6
- SASS

## How to install and run the app
1. `npm install`
2. `npm start`

## Using Best practices

- ### Ternary Operator for conditional rendering instead of &&
  https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx
- ### A clean way for setting Loading and Error states when fetching from an API
  https://medium.com/codex/handling-loading-and-error-state-in-react-application-and-clean-state-mess-b3cbf28029fd

## Design Choices

- ### HTTP requests handled in the page components

  following the Quotes project: https://codesandbox.io/s/13-2-quotes-app-react-router-v6-3wkobt?file=/src/pages/AllQuotes.js

- ### Usage of BEM methodology for CSS 


## Used Techniques

- ### Lifting State up
  Lifting the state up from the SearchCocktails component to the Cocktails component

- ### Passing ClassName as a prop
  Passed the className as a prop to CocktailType so the CocktailType can be dynamically styled based on which components implements it
