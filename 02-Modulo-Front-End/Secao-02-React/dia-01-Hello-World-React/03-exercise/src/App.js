import React from "react";
import './style.css'

const data = {
  name: 'Jhon Connor',
  module: 'Front-end',
  bornIn: 1989,
  watchedMovies: [
    { title: 'Titanic', release: 2000, favorite: true },
    { title: 'Terminator Salvation', release: 2009, favorite: true },
    { title: 'The Lord of The Rings', release: 2002, favorite: true },
    { title: 'Helloween Kills', release: 2022, favorite: false },
  ],
};

// D E S A F I O

// exibir todos os dados acima na tela (name, module, bornIn, watchedMovies)
// exibir apenas os dados referentes aos filmes favoritados (favorite === true)
// se o ano de nascimento for <= 2004 o nome da pessoa deve ficar verde, senão vermelho

const bornIn = data.bornIn;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.module}</h2>
        <h2 style={{color : bornIn <= 2004 ? 'red' : 'green'}}>{data.bornIn}</h2>
        {data.watchedMovies.map( ({title, release, favorite}) => {
          if (favorite === true) {
            return <p key={title} >{title}{', '}{release}</p>
          }
        } )}
      </div>
    );
  }
}

export default App