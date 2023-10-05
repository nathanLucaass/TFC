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

export const getAllMatchesService = async (): Promise<MatchResponse> => {
  console.log('getAllMatchesService');

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
