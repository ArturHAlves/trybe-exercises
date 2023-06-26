// src/routers/transactions.router.ts

import { Router } from 'express';
import transactionsController from '../controllers/transactions.controller';

const transactionsRouter = Router();

transactionsRouter.post('/transactions', transactionsController.create);

transactionsRouter.get('/transactions', transactionsController.list);

transactionsRouter.get('/transactions/:id', transactionsController.findById);

export default transactionsRouter;