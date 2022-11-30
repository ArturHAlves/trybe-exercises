import React, { Component } from 'react';

export default class App extends Component {
  
  state = {
  quantasVezesClicados: 0,
};
  
  eventoBotao = () => {
    this.setState((estadoAnterior) => ({
      quantasVezesClicados: estadoAnterior.quantasVezesClicados + 1,
    }));
  }

  mudarCor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: this.mudarCor(this.state.quantasVezesClicados),
          }}
          onClick={this.eventoBotao}
        >
          {this.state.quantasVezesClicados}
        </button>
      </div>
    );
  }
}
