import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';

import TeamsModel from "../database/models/TeamsModel";
import * as teamsService from "../service/teams.services";

import getAllTeam from "../controller/teams.controller";

chai.use(chaiHttp);

const { expect } = chai;



describe("Teams Controller", () => {
  beforeEach(function () { sinon.restore(); });
  it("should return all teams", async () => {


    const teams = [
      {
        id: 1,
        teamName: "Atlético Mineiro",
      },
      {
        id: 6,
        teamName: "Cruzeiro",
      },
    ];
    sinon.stub(TeamsModel, "findAll").resolves(TeamsModel.bulkBuild(teams));
    
    const result = await teamsService.getAllTeamsService();

    expect(result).to.be.deep.eq(teams);
  });
});

describe("Teams Controller", () => {
  
  beforeEach(function () { sinon.restore(); });
  it("should return all teams", async () => {

    const teams = [
      {
        id: 6,
        teamName: "Cruzeiro",
      },
      {
        id: 1,
        teamName: "Atlético Mineiro",
      },
    ];
    sinon.stub(teamsService, 'getAllTeamsService').resolves(teams);
    
    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(teams)
  });
});

//Evaluator Error 

