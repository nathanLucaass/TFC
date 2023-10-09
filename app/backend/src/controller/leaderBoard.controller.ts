import { Request, Response } from 'express';
import leaderBoardService from '../service/leaderBoard.services';

const homeTeamsPerfomace = async (req: Request, res: Response): Promise<void> => {
  const homeTeamStatsList = await leaderBoardService('home');

  res.status(200).json(homeTeamStatsList);
};

const awayTeamsPerfomace = async (req: Request, res: Response): Promise<void> => {
  const awayTeamStatsList = await leaderBoardService('away');

  res.status(200).json(awayTeamStatsList);
};

export { homeTeamsPerfomace, awayTeamsPerfomace };
