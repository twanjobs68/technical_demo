import React, { Component } from 'react';
import searchRecipes from './components/SearchRecipes.jsx';

class recipeInfo extends Component {
    constructor(){
        super()
            {/*state will be equal to the items you wanqt to pull from the api*/}
        this.state={
            title: title,
            release_date:"",
            plot: "",
            poster: ""
        }
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <h3>{this.state.date}</h3>
                <br></br>
                      <p>{this.state.ingredients}</p>
                <br></br>
                
            </div>
        );
    }
}

export default recipeInfo;

{/*const url= "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"}*/}