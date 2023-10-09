import { Request, Response } from 'express';
import {
  homeTeamsPerfomaceService,
  awayTeamsPerfomaceService,
} from '../service/leaderBoard.services';

const homeTeamsPerfomace = async (req: Request, res: Response): Promise<void> => {
  const homeTeamStatsList = await homeTeamsPerfomaceService();
  console.log(homeTeamStatsList);

  res.status(200).json(homeTeamStatsList);
};

const awayTeamsPerfomace = async (req: Request, res: Response): Promise<void> => {
  const awayTeamStatsList = await awayTeamsPerfomaceService();
  console.log(awayTeamStatsList);

  res.status(200).json(awayTeamStatsList);
};

export { homeTeamsPerfomace, awayTeamsPerfomace };
