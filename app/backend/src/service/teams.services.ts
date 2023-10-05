import TeamsModel from '../database/models/TeamsModel';

export type Team = {
  id: number;
  teamName: string;
};

type TeamResponse = {
  status: 'SUCCESS',
  data: Team
} | {
  status: 'ERROR',
  message: string
};

export const getAllTeamsService = async (): Promise<Team[]> => {
  const teams = await TeamsModel.findAll();
  const mappedTeams: Team[] = teams.map((team) => team.toJSON());
  return mappedTeams;
};

export const getTeamByIdService = async (id: number): Promise<TeamResponse> => {
  if (!id) return { status: 'ERROR', message: 'Id is required' };

  const team = await TeamsModel.findByPk(id);

  if (!team) return { status: 'ERROR', message: 'Team not found' };

  return { status: 'SUCCESS', data: team.toJSON() };
};
