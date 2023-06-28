// tests/unit/controllers/login.controller.test.ts

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';
import loginMock from '../../mocks/login.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Token } from '../../../src/types/Token';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const messageEmailOrPasswordEmpty = 'Dados inválidos';
  const messageEmailOrPasswordInvalid = 'E-mail ou senha inválidos';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('#login', function () {
    it('ao não receber um e-mail, retorne um erro', async function () {
      // Arrange
      req.body = loginMock.noEmailLoginBody;
      // Repare que, aqui, tipamos o valor de retorno do serviço para o tipo adequado.
      // Para isso, fomos lá em src/services/login.service.ts e exportamos o tipo Token para usarmos aqui!
      const serviceResponse: ServiceResponse<Token> = {
        status: 'INVALID_DATA',
        data: { message: messageEmailOrPasswordEmpty },
      };
      sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({
        message: messageEmailOrPasswordEmpty,
      });
    });

    it('ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
      // Arrange
      req.body = loginMock.validLoginBody;
      /* O serviço retorna uma token bcrypt válida. 
      Nesse teste unitário, tanto faz qual valor ela terá, contanto que 
      o controller retorne exatamente o que recebeu, por isso 
      colocamos qualquer coisa como valor. */
      const token = { token: 'm1nh4t0k3nbcr1p7v4l1d4' };
      const serviceResponse: ServiceResponse<Token> = {
        status: 'SUCCESSFUL',
        data: token,
      };
      sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(token);
    });

    it('ao não receber uma senha, retore um erro', async function () {
      // ARRANGE
      req.body = loginMock.noPasswordLoginBody;

      const serviceResponse: ServiceResponse<Token> = {
        status: 'INVALID_DATA',
        data: { message: messageEmailOrPasswordEmpty },
      };

      sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

      // ACT
      await loginController.login(req, res);

      // ASSERT
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: 'Dados inválidos' });
    });

    it('ao receber um e-mail inexistente, retorne um erro', async function () {
      // Arrange
      req.body = loginMock.notExistingUserBody;

      const serviceResponse: ServiceResponse<Token> = {
        status: 'UNAUTHORIZED',
        data: { message: messageEmailOrPasswordInvalid },
      };

      sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(401);
      expect(res.json).to.have.been.calledWith({
        message: messageEmailOrPasswordEmpty,
      });
    });

    it('ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
      // Arrange
      req.body = loginMock.existingUserWithWrongPasswordBody;

      const serviceResponse: ServiceResponse<Token> = {
        status: 'UNAUTHORIZED',
        data: { message: messageEmailOrPasswordInvalid },
      };

      sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

      // Act
      await loginController.login(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(401);
      expect(res.json).to.have.been.calledWith({
        message: messageEmailOrPasswordEmpty,
      });
    });
  });
});
