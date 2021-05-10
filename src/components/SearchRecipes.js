import React, { Component } from 'react';

class SearchRecipes extends Component {
    constructor(){
        super()
    }
    //function to get user input
    searchRecipes = async (event) => {
     event.preventDefault(); {/* so doesn't refresh and wipe out input*/}
     console.log("Entering search word")

     const query = "chicken"

  
    // VARIABLE FOR OUR URL TO LIVE IN */}
 const url = "https://api.edamam.com/search?q=chicken&app_id=${527f533d}&app_key=c5ce787be159504e33d23bb6cbc3b5fd&language=en-US&query=${query}&page=1&include_adult=false"

 // const url = `https://api.themoviedb.org/3/search/movie?api_key=f5f61add57f604cf9812445951da0a6c&language=en-US&query=${query}&page=1&include_adult=false`
    // use await to wait for a response to tell our function to wait for data(url) and turn data to json data
    // const response = await fetch(url) 
    // const data = await response.json()
    // console.log(data.results[0].overview)

    // Try to do something and if it doesn't work then catch it
   
    // Try to do something(fetch the data turn it to json and console overview) and if it doesn't work then catch it
     try{
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.results[0].overview)}
        // console.log(data.results)}
        console.log(data)}
        catch(err){
            console.log(err)
        }

    }
    render() {
        return (
            <div className="myForm">

                <form action="" className="form" onSubmit={this.searchRecipes}>
                    <label className="label" htmlFor="query">Recipe Ingredient or Name of Recipe(ex. Eggplant Parmesean): </label>
                    <input type="text" name="query" className="input"/>
                    <button className="button" type="submit">Search usin</button>
                
                </form>
            </div>
        );
    }
}
export default SearchRecipes;