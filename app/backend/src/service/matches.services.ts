import MatchesModel from '../database/models/MatchesModel';

export type Match = {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
  homeTeam: {
    teamName: string;
  };
};

type MatchResponse = {
  status: 'SUCCESS',
  data: Match[]
};
type UpdateResponse = {
  message: string;
};

export const getAllMatchesService = async (): Promise<MatchResponse> => {
  const matches = await MatchesModel.findAll({
    include: [
      {
        association: 'homeTeam',
        attributes: ['teamName'],
      }, {
        association: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
  });
  const mappedMatches: Match[] = matches.map((match) => match.toJSON());
  return { status: 'SUCCESS', data: mappedMatches };
};
export const getAllMatchesProgressService = async (status: boolean): Promise<MatchResponse> => {
  const matches = await MatchesModel.findAll({
    where: {
      inProgress: status,
    },
    include: [
      {
        association: 'homeTeam',
        attributes: ['teamName'],
      },
      {
        association: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
  });
  const mappedMatches: Match[] = matches.map((item) => item.toJSON());
  return { status: 'SUCCESS', data: mappedMatches };
};

export const finishMatchByIdService = async (id: number): Promise<UpdateResponse> => {
  const match = await MatchesModel.findByPk(id);
  if (!match) {
    return { message: 'Match not found' };
  }
  await match.update({ inProgress: false });
  return { message: 'Finished' };
};

export const atualizateMatchByIdService = async (
  id: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
): Promise<UpdateResponse> => {
  const match = await MatchesModel.findByPk(id);
  if (!match) {
    return { message: 'Match not found' };
  }
  await match.update({ homeTeamGoals, awayTeamGoals });
  return { message: 'Updated' };
};
