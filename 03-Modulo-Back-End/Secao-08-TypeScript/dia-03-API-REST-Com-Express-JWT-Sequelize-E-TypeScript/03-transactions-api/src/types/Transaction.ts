// src/types/Transaction.ts

export type Transaction = {
  id: number,
  name: string,
  price: number,
  type: 'Saque' | 'Depósito',
  userId: number,
};