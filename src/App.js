import './App.css';
import React, { useEffect, useState } from 'react';

//  EDAMAM app id and app key
const App = () => {
  //const APP_ID = "527f533d"; //Edamam app  id
  //const APP_KEY = "8cac0c54cd89d9e4553596bd1b34a435";//edamam app key
  const API_KEY = "a757e4768ddb43f5bc5ff08e024f0033"; //spoonacular api


  // Use Effect will run only once when application mounts. This tells React that something needs to be done after the DOM is updated.  This
  //will happen after each render so that data displayed on the DOM is current.dependency values from last render and dependencies from react are 
  //checked and the funcion for the effect is called if any dependency has changed 

  // add function to get recipe information to use Effect so that api information is populated to data variablel

  useEffect(() => {
    recipeInfo();
  }, []);

  const recipeInfo = async () => {
    //Edamam api error with no cors mode -const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}');
    //below is  api address for spoonacular
    //attempted coding for no cors as console suggested.  Unable to understand to complete
    //atempted using different API call with different company-=Spoonacular.  

    const response = await fetch('https://api.spoonacular.com/recipes/random&api_key=a757e4768ddb43f5bc5ff08e024f0033');
    const data = await response.json();
    // console.log(data.results[0].overview)}
    console.log(data)
  }



return (
  <div className="myForm">
    <div className="myHeading">
      <h1>2K's Recipe Search</h1>
      {/* <form className="form" onSubmit={this.searchRecipes}> */}
      <form className="form" >

        {/* <label className="label" htmlFor="query">Recipe Ingredient or Name of Recipe(ex. Eggplant Parmesean): </label> */}
        <label className="label">Recipe Ingredient/Name (ex. Eggplant Parmesean): </label>

        <input type="text" className="input-search" />
        <button className="search-ingredient-button" type="submit"> Search </button>

      </form>
    </div>
  </div>
);
  };




export default App;
