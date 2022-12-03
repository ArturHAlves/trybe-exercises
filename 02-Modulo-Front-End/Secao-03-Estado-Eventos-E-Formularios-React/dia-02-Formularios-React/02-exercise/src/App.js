import React from 'react';
import Forms from './components/Forms';

// Faça todos os seus elementos componentes do formulário, criado nos exercícios anteriores, ficarem 100% controlados. Para isso, construa um event handler genérico para lidar com eles.  

// Acrescente no seu formulário um input do tipo checkbox, e garanta que seu event handler esteja tratando este caso corretamente.

// Na documentação de React (primeiro link da seção de Recursos Adicionais!), busque sobre os formulários e faça a leitura de como se deve adicionar um input para arquivos. Feito isso, acrescente um input ao seu formulário.

// Encapsule alguns dos seus campos num fieldset. Para isso, primeiro entenda como ele funciona lendo a documentação.


export default class App extends React.Component {
  state = {
    name: 'test',
    email: '',
    aboutMe: '',
    game: 'Forza',
    concorda: false
  };


  handleChange = ( { target } ) => {
    
    const value = target.type === 'checkbox' ? target.checked : target.value
    
    // console.log(value);

    const { name } = target

    this.setState({ [name]: value })
  }

  render() {

    const { ...state } = this.state

    return (
      <>
        <Forms value={state} handleChange={this.handleChange} />
      </>
    );
  }
}


