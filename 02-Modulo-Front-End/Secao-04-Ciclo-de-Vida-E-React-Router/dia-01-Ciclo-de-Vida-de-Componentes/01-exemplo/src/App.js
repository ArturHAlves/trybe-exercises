// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
        };

        this.functionApi = this.functionApi.bind(this)

      }

   async functionApi() {
     fetch('https://rickandmortyapi.com/api/character')
     .then(response => response.json())
     .then(data => {
       this.setState({characters: data.results})
     })

    }


    componentDidMount() {
      this.functionApi()
    }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map((character) => {
            return (
              <div className="container" key={character.name}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
