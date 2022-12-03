import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    const { game, handleChange } = this.props;

    return (
      <label htmlFor="game">
        Jogo Favorito:
        <select value={game} onChange={handleChange}>
          <option value="The Witcher">The Witcher</option>
          <option value="Red Dead">Red Dead</option>
          <option value="Forza">Forza</option>
          <option value="Selecione">--Selecione</option>
        </select>
      </label>
    );
  }
}
