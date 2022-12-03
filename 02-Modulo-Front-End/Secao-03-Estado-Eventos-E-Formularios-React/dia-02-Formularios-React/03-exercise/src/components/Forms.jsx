import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Game from './Game';
import InputEmail from './InputEmail';
import InputName from './InputName';
import Termos from './Termos';

export default class Forms extends Component {
  state = {
    name: '',
    email: '',
    aboutMe: '',
    game: 'Selecione',
    concorda: true,
    formularioComErros: true,
  };

  handleError = () => {
    const { name, email, aboutMe, game, concorda } = this.state;

    const errorCase = [
      !name.length,
      !email.length,
      !aboutMe.length,
      !game.length,
      !concorda,
    ];

    const formularioPreenchidos = errorCase.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchidos,
    });
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const { name } = target;

    this.setState({ [name]: value }, this.handleError);
  };

  render() {
    const { name, email, aboutMe, game, concorda, formularioComErros } = this.state;

    return (
      <form>
        <fieldset>
          <legend>Importante:</legend>

          <Game game={game} handleChang={this.handleChange} />

          <InputName handleChange={this.handleChange} name={name} />

          <InputEmail handleChange={this.handleChange} email={email} />
        </fieldset>

        <fieldset>
          <legend>Info Pessoais</legend>
          <AboutMe aboutMe={aboutMe} handleChange={this.handleChange} />

          <Termos concorda={concorda} handleChang={this.handleChange} />
        </fieldset>

        {formularioComErros ? <span style={{color: 'red'}}>Preencha o trem</span> : <span style={{color: 'green'}}>Deu tudo certo</span>}


      </form>
    );
  }
}
