import "./App.css";
import React from "react";

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      affiliations: null,
      image: null, 
    }
    

  }
  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          image: data.image, 
          affiliations: data.affiliations,
          loadedCharacter: true,
      })
      
    });
  }
  render() {
    return (
      <div>
        {
         this.state.loadedCharacter &&
          <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <p>Affiliations:</p>
            <ul>
              
              {this.state.affiliations.map(affiliations => {
                return <li>{affiliations}</li>
              })}
            
            </ul>
            <img src={this.state.image} height={150} ></img>
          </div>
        }
        
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          className="btn"
        >
          Randomize Character
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
