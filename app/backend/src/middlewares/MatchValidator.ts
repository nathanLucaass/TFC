import { Request, Response, NextFunction } from 'express';
import { getAllTeamsService } from '../service/teams.services';

const matchValidator = async (req: Request, res: Response, next: NextFunction) => {
  const teams = await getAllTeamsService();
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  if (homeTeamId > teams.length || awayTeamId > teams.length) {
    return res.status(404)
      .json({ message: 'There is no team with such id!' });
  }
  next();
};

export default matchValidator;
