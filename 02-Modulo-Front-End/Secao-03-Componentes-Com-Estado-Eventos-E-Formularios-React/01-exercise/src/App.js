import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
      super()

      this.eventoBotao = this.eventoBotao.bind(this)
      // this.eventoBotao2 = this.eventoBotao2.bind(this)
      this.eventoBotao3 = this.eventoBotao3.bind(this)

    }
  
  // Como o eventoBotao está usando o arrow function, não tem a necessidade de usar bind 
  eventoBotao = () => {
    console.log('Botão1');
    console.log(this);
  }

  // como o eventoBotao2 não está usando arrow function, precisa de todo o constructor e o bind 
  eventoBotao2() {
    console.log('Botão2');
    console.log(this);
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
