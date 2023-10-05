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


describe("Users Service", () => {

  beforeEach(function () { sinon.restore(); });

  it("loginService error", async () => {
    const response = await usersService.loginService('test', 'test');

    expect(response).to.be.deep.eq({ status: "ERROR", message: "Invalid email or password" });
  });

  it('getRoleService error', async () => {
    const response = await usersService.getRoleService('test');

    expect(response).to.be.deep.eq({ status: "ERROR", message: "User not found" });
  });
  
});