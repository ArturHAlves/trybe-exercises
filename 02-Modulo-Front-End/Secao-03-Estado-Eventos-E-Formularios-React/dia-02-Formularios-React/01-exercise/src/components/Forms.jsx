import React, { Component } from 'react';

export default class Forms extends Component {
  render() {

    // console.log(this);
    const { name, handleChange } = this.props

    return (
      <form>
        <label htmlFor="game">
          Jogo Favorito:
          <select>
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
           />
        </label>

      <label htmlFor="">
      Sobre você:
      <textarea name="" id="" />

      </label>


      </form>
    );
  }
}
