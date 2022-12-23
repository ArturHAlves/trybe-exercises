import React from 'react';

class Home extends React.Component {

  state = {
    userName: 'Artur',
    role: 'Admin'
  }


  render() {


    const { history: { push } } = this.props


    return (

      <div>
        <h1>Home Page</h1>
        <button onClick={ () => push('/Welcome', this.state) } type='button'>

        Acesse a página de Boas-Vindas

        </button>
      </div>
    );
  }
}

export default Home;
