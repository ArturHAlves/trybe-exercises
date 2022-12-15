import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

// Aplicação para bem estar:
// Você vai clicar no botão..
// Vai surgir um contador, com limite até 5 que vai mudando as frases
// Frases para inspirar, segurer, expire

export default class App extends Component {
  state = {
    showTimer: false,
  };

  handleShowTimer = () => {
    this.setState((estadoAnterior) => ({
      showTimer: !estadoAnterior.showTimer,
    }));
  };

  render() {
    const { showTimer } = this.state;

    return (
      <div className="container">
        <div className="containerDiv">
          <h1 className="title">Quando estiver estressado!</h1>
          {showTimer && <Timer />}
          <button className='btn' type="button" onClick={this.handleShowTimer}>
            {showTimer ? 'Desligar Timer' : 'Ligar Timer'}
          </button>
        </div>
      </div>
    );
  }
}
