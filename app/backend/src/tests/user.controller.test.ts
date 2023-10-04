import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';
import { Request } from 'express';

import UsersModel from "../database/models/UsersModel";
import * as usersService from "../service/users.services";
import { login } from '../controller/users.controller';

chai.use(chaiHttp);

const { expect } = chai;

describe("Users Controller", () => {
  const req = {} as Request;

  beforeEach(function () { sinon.restore(); });

  it("should return a token if user is found", async () => {
    const user = UsersModel.build({
      id: 1,
      username: 'test',
      role: 'admin',
      email: 'test@test.com',
      password: 'test123',
    });
    sinon.stub(UsersModel, 'findOne').resolves(user);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.stub(jwt, 'sign').returns();

    const response = await usersService.loginService('test', 'test');
    
    expect(response).to.not.be.equal(null);
  });

  it("should return a error if user not found", async () => {
    const response = await usersService.loginService('test', 'test');

    expect(response).to.be.deep.eq({ status: "ERROR", message: "User not found" });
  })

});
