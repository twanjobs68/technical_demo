import React from 'react'
import ReactDOM from 'react' 



class ExampleComponent extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { }; 
    } 
    componentDidMount() {
        // send HTTP request
        const url= "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${c5ce787be159504e33d23bb6cbc3b5fd}&from=0&to=3&calories=591-722&health=alcohol-free"
        // save it to the state

//example of promise code. Try to fetch data and promise to wait for response and console log data, if no fetch, console log the error.
        try{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data.results[0].overview)}
            console.log(data.results)}
            catch(err){
                console.log(err)
            }
    }
    render() { 
        return ( 
            <div> 
                <h1>This is a view created by a class component</h1> 
            </div> 
        ); 
    } 
} 
