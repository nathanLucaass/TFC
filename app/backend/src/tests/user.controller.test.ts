import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';
import { Request } from 'express';

import UsersModel from "../database/models/UsersModel";
import * as usersService from "../service/users.services";
import login from '../controller/users.controller';

chai.use(chaiHttp);

const { expect } = chai;

describe("Users Controller", () => {
  const req = {} as Request;

  beforeEach(function () { sinon.restore(); });

  it("hould return a token if user is found", async () => {
   req.body = { email: 'test', password: 'test' };
  
   sinon.stub(usersService, 'loginService').resolves({ status: "SUCCESS", data: {token: 'token'} });

    const { status, body } = await chai.request(app).post('/login').send(req.body);

    expect(status).to.equal(200);
    expect(body).to.deep.equal({token: 'token'})
  });

  it("should return a error if user not found", async () => {
    req.body = { email: 'test', password: 'test' };
    sinon.stub(usersService, 'loginService').resolves({ status: "ERROR", message: "User not found" });
    
    const { status, body } = await chai.request(app).post('/login').send(req.body);

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: "User not found" })
  })

});
