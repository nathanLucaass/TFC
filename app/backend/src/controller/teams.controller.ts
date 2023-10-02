import { Request, Response } from 'express';
import { getAllTeamsService, getTeamByIdService } from '../service/teams.services';

export const getAllTeams = async (req: Request, res: Response): Promise<void> => {
  console.log('getAllTeams');
  const teams = await getAllTeamsService();
  res.status(200).json(teams);
};

export const getTeamById = async (req: Request, res: Response): Promise<void | Response> => {
  const { id } = req.params;
  const response = await getTeamByIdService(Number(id));
  if (response.status === 'ERROR') return res.status(404).json({ message: response.message });
  res.status(200).json(response.data);
};
