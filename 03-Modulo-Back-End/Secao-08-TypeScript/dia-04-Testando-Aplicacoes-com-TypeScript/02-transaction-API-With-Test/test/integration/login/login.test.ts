// tests/integration/login/login.test.ts

import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('ao não receber um e-mail, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.noEmailLoginBody;

    // Act
    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
  });
  it('ao não receber uma senha, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.noPasswordLoginBody;

    // Act
    const httpResponse = await chai
      .request(app)
      .post('/login')
      .send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
  });

  it('ao receber um e-mail inexistente, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.notExistingUserBody
    sinon.stub(UserModel, 'findOne').resolves(null);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.existingUserWithWrongPasswordBody 
    /* Esta linha será responsável por definir um valor derivado de loginMock.existingUser
    que é compatível com o tipo esperado como retorno da função `findOne()`  */
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    /* Aqui utilizamos o valor de mockFindOneReturn pois ele é compatível com o retorno da função `findOne()` */
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/login')
      .send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
  });

  it('ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
    // Arrange
    const httpRequestBody = loginMock.validLoginBody
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });

});
