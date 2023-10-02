import { Request, Response } from 'express';
import getAllTeamsService from '../service/teams.services';

const getAllTeams = async (req: Request, res: Response): Promise<void> => {
  console.log('getAllTeams');
  const teams = await getAllTeamsService();
  res.status(200).json(teams);
};

export default getAllTeams;
