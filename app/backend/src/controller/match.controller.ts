import { Request, Response } from 'express';
import { getAllMatchesService } from '../service/matches.services';

const getAllMatches = async (req: Request, res: Response): Promise<void> => {
  const matches = await getAllMatchesService();
  res.status(200).json(matches.data);
};

export default getAllMatches;
