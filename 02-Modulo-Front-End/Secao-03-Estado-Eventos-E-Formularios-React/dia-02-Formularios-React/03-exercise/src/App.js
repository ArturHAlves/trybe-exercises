
import React from 'react';
import Forms from './components/Forms';

// No seu formulário, criado nos exercícios anteriores, faça que dois de seus campos sejam componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertença ao componente pai.

// Faça validações nos componentes criados.

// Crie no estado do componente pai, um campo formularioComErros o qual deve ser true, caso algum desses componentes tenha erros e false caso os componentes não tenham erros.


export default class App extends React.Component {
  


  
  render() {

    

    return (
      <>
        <Forms />
      </>
    );
  }
}


