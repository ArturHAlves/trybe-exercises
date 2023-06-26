// src/services/login.service.ts

import jwtUtil from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

/* Esta função recebe um valor do tipo login e retorna uma promise, que envelopa um valor do tipo ServiceResponse, e, por sua vez, também envelopa um valor do tipo _Token_ no cenário de sucesso! */
async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  /* Verificamos se o parâmetro login possui valores válidos para os atributos email e password. */
  if (!login.email || !login.password) {
    /* Se não forem válidos, devemos devolver esse objeto que, mesmo não atribuído a uma variável do tipo ServiceResponse, segue o formato de um objeto de erro! 
    Teremos, então, a inferência de tipo em ação! */
    return { status: 'INVALID_DATA', data: { message: 'Dados inválidos' } };
  }

  /* Caso o email e password sejam válidos, devemos buscar no banco para ver se existe
  uma pessoa usuária que possua o valor da coluna email igual ao valor
  que chegou como parâmetro. */
  const foundUser = await UserModel.findOne({ where: { email: login.email } });
  
  /* Devemos verificar se foundUser é diferente de nulo ou se o foundUser.dataValues possui o atributo password com um valor diferente da senha que chegou como parâmetro! */
  if (!foundUser || foundUser.dataValues.password !== login.password) {
    /* Caso seja diferente, retornamos esse objeto no formato ServiceResponse, sinalizando um erro com uma mensagem específica para esse caso, e o status UNAUTHORIZED que será mapeado para o status 403 pela função mapStatusHTTP implementada anteriormente! Mais uma vez, a tipagem é definida pela inferência! */
    return { status: 'UNAUTHORIZED', data: { message: 'E-mail ou senha inválidos' } };
  }

  /* Extraímos os atributos id e email dos dados retornado pelo banco.
  Por questão de segurança, armazenamos só os campos essenciais no token que será gerado! */
  const { id, email } = foundUser.dataValues;

  /* Caso o usuário seja válido, o token será criado! */
  const token = jwtUtil.sign({ id, email });

  /* Retornarmos um objeto do tipo ServiceResponse que encapsula um objeto do tipo Token */
  return { status: 'SUCCESSFUL', data: { token } };
}
export default {
  verifyLogin,
};