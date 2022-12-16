import React, { Component } from 'react';

class Person extends Component {
  state = {
    results: [],
    render: true,
  };

  async componentDidMount() {
    console.log('Did Mount');
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();

    // console.log(data.results);

    this.setState({
      results: data.results,
      render: false,
    });
  }

  shouldComponentUpdate() {
    console.log('Did Shout Update');

    
    return true
  }

  componentDidUpdate() {
    console.log('Did Update');
  }

  render() {
    console.log('render');

    const { results, render } = this.state;

    return (
      <>
        <h1> Seja bem-vindo </h1>
        {render ? (
          <p>Carregando...</p>
        ) : (
          results.map((info) => (
            <div key={info.name.first}>
              <img
                src={info.picture.medium}
                alt={` Usuário ${info.name.first}`}
              />
              <p>
                {`Nome: ${info.name.first} ${info.name.last}`}
              </p>
              <p>{`Email: ${info.email}`}</p>
              <p>{`Idade: ${info.dob.age}`}</p>
            </div>
          ))
        )}
      </>
    );
  }
}

export default Person;
