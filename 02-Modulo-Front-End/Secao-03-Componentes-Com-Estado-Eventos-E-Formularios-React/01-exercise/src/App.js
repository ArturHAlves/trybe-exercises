import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.eventoBotao = this.eventoBotao.bind(this);
  }

  state = {
    numeroDeCliques: 0,
  };

  eventoBotao() {
    this.setState((valorAtual) => ({
      numeroDeCliques: valorAtual.numeroDeCliques + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.eventoBotao}>{this.state.numeroDeCliques}</button>
      </div>
    );
  }
}
