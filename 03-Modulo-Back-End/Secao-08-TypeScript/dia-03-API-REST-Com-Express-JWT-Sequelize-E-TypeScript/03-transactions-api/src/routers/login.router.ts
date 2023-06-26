// src/routers/login.router.ts

import { Router } from 'express';
import loginController from '../controllers/login.controller';

const loginRouter = Router();

loginRouter.post('/login', loginController.login);

export default loginRouter;