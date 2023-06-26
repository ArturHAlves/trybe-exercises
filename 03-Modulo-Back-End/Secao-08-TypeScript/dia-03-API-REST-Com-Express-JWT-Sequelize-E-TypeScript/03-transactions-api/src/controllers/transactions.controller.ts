import { Request, Response } from 'express';
import transactionService from '../services/transactions.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response) {
  const { name, price, type, userId } = req.body;

  const serviceResponse = await transactionService.create({ name, price, type, userId });
 
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  
  return res.status(201).json(serviceResponse.data);
}

async function list(_req: Request, res: Response) {
  const serviceResponse = await transactionService.list();

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
}

async function findById(req: Request, res: Response) {
  const { id } = req.params;

  const serviceResponse = await transactionService.findById(+id);

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
}

export default { create, list, findById };