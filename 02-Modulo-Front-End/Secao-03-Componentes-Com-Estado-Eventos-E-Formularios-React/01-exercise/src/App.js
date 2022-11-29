import React, { Component } from 'react';

export default class App extends Component {
  eventoBotao() {
    console.log('Botão1');
  }

  eventoBotao2() {
    console.log('Botão2');
  }

  eventoBotao3() {
    console.log('Botão3');
  }

  render() {
    return (
      <div>
        <button onClick={this.eventoBotao}>Botão 1</button>
        <button onClick={this.eventoBotao2}>Botão 2</button>
        <button onClick={this.eventoBotao3}>Botão 3</button>
      </div>
    );
  }
}
