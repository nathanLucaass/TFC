import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

import { Response } from 'superagent';

import TeamsModel from "../database/models/TeamsModel";
import * as teamsService from "../service/teams.services";
import { getTeamById } from '../controller/teams.controller';

chai.use(chaiHttp);

const { expect } = chai;

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

  it("should return team by id", async () => {
    const team = {
      id: 1,
      teamName: "Cruzeiro",
    };
    sinon.stub(teamsService, 'getTeamByIdService').resolves({ status: "SUCCESS", data: team });

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(team)
  });

  it("should return a error if team not found", async () => {
    sinon.stub(teamsService, 'getTeamByIdService').resolves({ status: "ERROR", message: "Team not found" });
    
    const { status, body } = await chai.request(app).get('/teams/99');

    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: "Team not found" })
  });
});