import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe("loginValidator", () => {
  it("should return a error if email is invalid", async () => {
    const { status, body } = await chai.request(app).post('/login').send({ email: 'test', password: 'test' });

    expect(status).to.equal(400);
    expect(body).to.deep.equal({ message: 'Invalid email or password' });
  });
});
