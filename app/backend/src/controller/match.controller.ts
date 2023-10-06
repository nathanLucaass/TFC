import { Request, Response } from 'express';
import {
  getAllMatchesService,
  getAllMatchesProgressService,
  finishMatchByIdService,
} from '../service/matches.services';

const getAllMatches = async (req: Request, res: Response): Promise<void> => {
  const status = req.query.inProgress === 'true';
  if (req.query.inProgress) {
    const matches = await getAllMatchesProgressService(status);
    res.status(200).json(matches.data);
  } else {
    const matches = await getAllMatchesService();
    res.status(200).json(matches.data);
  }
};

const finishMatchById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const match = await finishMatchByIdService(Number(id));
  res.status(200).json(match);
};

export { getAllMatches, finishMatchById };
