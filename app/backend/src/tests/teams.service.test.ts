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

describe("Teams Service", () => {
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

  it("should return team by id", async () => {
    const team = {
      id: 1,
      teamName: "Cruzeiro",
    };
    sinon.stub(TeamsModel, "findByPk").resolves(TeamsModel.build(team));

    const result = await teamsService.getTeamByIdService(1);

    expect(result).to.be.deep.eq({ status: "SUCCESS", data: team });
  });

  // it("should return a error if id is not provided", async () => {
  //   const result = await teamsService.getTeamByIdService(null);

  //   expect(result).to.be.deep.eq({ status: "ERROR", message: "Id is required" });
  // });

  it("should return a error if team not found", async () => {
    sinon.stub(TeamsModel, "findByPk").resolves(null);

    const result = await teamsService.getTeamByIdService(1);

    expect(result).to.be.deep.eq({ status: "ERROR", message: "Team not found" });
  });
});