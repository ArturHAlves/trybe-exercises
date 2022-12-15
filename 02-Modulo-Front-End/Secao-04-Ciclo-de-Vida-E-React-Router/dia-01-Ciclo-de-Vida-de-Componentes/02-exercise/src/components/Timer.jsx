import React from 'react';

export default class Timer extends React.Component {
  state = {
    contador: 0,
    frases: ['inspire...', 'segure...', 'expire...'],
    valorCorrente: 0,
  };

  // Quero que o contador seja contado a cada um segundo
  // Quero ter um intervalo de 1 segundo
  componentDidMount() {
    console.log('Did Mount');

    // Colocar um segundo
    const INTERVALO = 1000;

    setInterval(() => {
      this.setState((estadoAntigo) => ({
        contador: estadoAntigo.contador + 1,
      }));
    }, INTERVALO);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Did Update');

    const { contador, valorCorrente } = prevState;

    if (contador === 5) {
      this.setState({
        contador: 0,
        valorCorrente: valorCorrente < 2 ? valorCorrente + 1 : 0,
      });
    }
  }

  render() {
    console.log('render');

    const { contador, frases, valorCorrente } = this.state;

    return (
      <div style={{ border: '4px solid rgb(63, 90, 163)' }}>
        <h1 className="phase">{frases[valorCorrente]}</h1>
        <h1 className="phase">{contador}</h1>
      </div>
    );
  }
}
