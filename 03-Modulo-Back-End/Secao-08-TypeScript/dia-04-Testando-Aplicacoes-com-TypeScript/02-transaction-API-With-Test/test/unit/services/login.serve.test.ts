// tests/unit/services/login.service.test.ts

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'sequelize';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';
import loginService from '../../../src/services/login.service';

describe('LoginService', function () {
  beforeEach(function () {
    sinon.restore();
  });

  describe('#verifyLogin', function () {
    it('ao não receber um e-mail, retorne um erro', async function () {
      // Arrange
      const parameters = loginMock.noEmailLoginBody;

      // Act
      const serviceResponse = await loginService.verifyLogin(parameters);

      // Assert
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({ message: 'Dados inválidos' });
    });

    it('ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
      // Arrange
      const parameters = loginMock.validLoginBody;
      const mockFindOneReturn = UserModel.build(loginMock.existingUser);
      sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

      // Act
      const serviceResponse = await loginService.verifyLogin(parameters);

      // Assert
      expect(serviceResponse.status).to.eq('SUCCESSFUL');
      expect(serviceResponse.data).to.have.key('token');
    });

    it('ao não receber uma senha, retorne um erro', async function () {
      // Arrange
      const parameters = loginMock.noPasswordLoginBody;

      // ACT
      const serviceResponse = await loginService.verifyLogin(parameters);

      // Assert
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).to.deep.eq({ message: 'Dados inválidos' });
      expect(serviceResponse.data).not.to.have.key('token');
    });

    it('ao não receber um e-mail inexistente, retorne um erro', async function () {
      // Arrange
      const parameters = loginMock.notExistingUserBody;
      // const mockFindOneReturn = UserModel.build(parameters)
      sinon.stub(UserModel, 'findOne').resolves(null);
      // Act
      const serviceResponse = await loginService.verifyLogin(parameters);

      // Assert
      expect(serviceResponse.status).to.eq('UNAUTHORIZED');
      expect(serviceResponse.data).to.deep.eq({
        message: 'E-mail ou senha inválidos',
      });
      expect(serviceResponse.data).not.to.have.key('token');
    });

    it('ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
      // Arrange
      const parameters = loginMock.existingUserWithWrongPasswordBody;
      // const userInstance = UserModel.build(loginMock.existingUser);
      const mockFindOneReturn = UserModel.build(loginMock.existingUser);
      sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

      // Act
      const serviceResponse = await loginService.verifyLogin(parameters);

      // Assert
      expect(serviceResponse.status).to.eq('UNAUTHORIZED');
      expect(serviceResponse.data).not.to.have.key('token');
      expect(serviceResponse.data).to.deep.eq({
        message: 'E-mail ou senha inválidos',
      });
    });
  });
});
