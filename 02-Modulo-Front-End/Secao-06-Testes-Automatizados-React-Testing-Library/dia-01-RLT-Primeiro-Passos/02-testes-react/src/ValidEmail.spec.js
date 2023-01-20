import ValidEmail from "./ValidEmail";
import { screen, render } from "@testing-library/react";

describe( 'Validar o componente ValidEmail', () => {

  it('Testando um componente, caso o email seja válido', () => {
    const email_user = 'test@gmail.com'
    // Renderizar
    render(<ValidEmail email={ email_user }/>);

    //Buscar elementos
    const isValid = screen.getByText('Email Válido')

    //test

    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja invalido', () => {
    const email_user = 'test.gmail.com'

    render(<ValidEmail email={ email_user } />)

    //Buscar elementos
    const isValid = screen.getByText(/Email inválido/i);

    expect(isValid).toBeInTheDocument();
  })
} )