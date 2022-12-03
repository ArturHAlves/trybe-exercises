import React, { Component } from 'react';

export default class Forms extends Component {
  render() {
    // console.log(this);
    const { game, name, email, aboutMe, concorda, handleChange } = this.props;

    return (
      <form>
        <fieldset>
          <legend>Importante:</legend>
          <label htmlFor="game">
            Jogo Favorito:
            <select name="game" value={game} onChange={handleChange}>
              <option value="The Witcher">The Witcher</option>
              <option value="Red Dead">Red Dead</option>
              <option value="Forza">Forza</option>
            </select>
          </label>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Info Pessoais</legend>
          <label htmlFor="aboutMe">
            Sobre você:
            <textarea
              name="aboutMe"
              id="aboutMe"
              onChange={handleChange}
              value={aboutMe}
            />
          </label>
          Você concorda:
          <label htmlFor="concorda">
            <input
              type="checkbox"
              name="concorda"
              id="concorda"
              onChange={handleChange}
              value={concorda}
            />
            yes
          </label>
        </fieldset>
      </form>
    );
  }
}
