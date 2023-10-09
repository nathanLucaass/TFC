import { Request, Response } from 'express';
import homeTeamsPerfomaceService from '../service/leaderBoard.services';

const homeTeamsPerfomace = async (req: Request, res: Response): Promise<void> => {
  const homeTeamStatsList = await homeTeamsPerfomaceService();
  console.log(homeTeamStatsList);

  res.status(200).json(homeTeamStatsList);
};

export default homeTeamsPerfomace;
