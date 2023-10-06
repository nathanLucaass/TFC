import { Request, Response } from 'express';
import {
  getAllMatchesService,
  getAllMatchesProgressService,
  finishMatchByIdService,
  atualizateMatchByIdService,
} from '../service/matches.services';

export const getAllMatches = async (req: Request, res: Response): Promise<void> => {
  const status = req.query.inProgress === 'true';
  if (req.query.inProgress) {
    const matches = await getAllMatchesProgressService(status);
    res.status(200).json(matches.data);
  } else {
    const matches = await getAllMatchesService();
    res.status(200).json(matches.data);
  }
};

export const finishMatchById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const match = await finishMatchByIdService(Number(id));
  res.status(200).json(match);
};

export const atualizateMatchById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const match = await atualizateMatchByIdService(Number(id), homeTeamGoals, awayTeamGoals);
  res.status(200).json(match);
};
