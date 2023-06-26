// src/utils/jwt.util.ts

import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  id: number,
  email: string,
};

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);
  return token;
}

function verify(token: string): TokenPayload { 
  /* Ao utilizarmos Type Assertion para `TokenPayload` aqui, estamos garantindo que 
  a função `jwt.verify` sempre retornará o `id` e o `email`. Nesse caso, irá, mas
  vale lembrar que, se não retornar, perdemos a proteção da tipagem aqui. Usamos
  a ferramenta com responsabilidade! */
  const data = jwt.verify(token, secret) as TokenPayload; 
  return data; 
}

export default {
  sign,
  verify,
};