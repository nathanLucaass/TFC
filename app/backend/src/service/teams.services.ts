import TeamsModel from '../database/models/TeamsModel';

type Team = {
  id: number;
  teamName: string;
};

const getAllTeamsService = async (): Promise<Team[]> => {
  console.log('getAllTeamsService');

  const teams = await TeamsModel.findAll();
  const mappedTeams: Team[] = teams.map((team) => team.toJSON());
  return mappedTeams;
};

export default getAllTeamsService;
