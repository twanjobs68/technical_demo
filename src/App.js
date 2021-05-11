import react from "react";
import './App.css';
import React, {useEffect ,useState} from 'react';
import SearchRecipes from './components/SearchRecipes';



    //  EDAMAM app id and app key
    const App = () => {
    const APP_ID = "527f533d";
    const APP_KEY = "c5ce787be159504e33d23bb6cbc3b5fd";

    // Use Effect will run only once when application mounts. This tells React that something needs to be done after the DOM is updated.  This
    //will happen after each render so that data displayed on the DOM is current.dependency values from last render and dependencies from react are 
    //checked and the funcion for the effect is called if any dependency has changed 

    // const [counter, setCounter] = useState(0);

    useEffect(() => {
      console.log("inside use effect");
    }, []);

    const recipeInfo = async () =>{
      const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=${APP_KEY}&app_key=${APP_ID}');
      const data = await response.json();
      console.log(data);
    }


    return (
      <div className="myForm">

        {/* <form className="form" onSubmit={this.searchRecipes}> */}
        <form className="form" >

          {/* <label className="label" htmlFor="query">Recipe Ingredient or Name of Recipe(ex. Eggplant Parmesean): </label> */}
          <label className="label">Recipe Ingredient/Name (ex. Eggplant Parmesean): </label>

          <input type="text" className="input-search" />
          <button className="search-ingredient-button" type="submit"> Search </button>

        </form>
      </div>
    );
  };




  export default App;
