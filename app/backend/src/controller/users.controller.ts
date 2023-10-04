import { Request, Response } from 'express';
import { loginService, getRoleService } from '../service/users.services';

const login = async (req: Request, res: Response): Promise<void | Response> => {
  const { email, password } = req.body;
  const response = await loginService(email, password);
  if (response.status === 'ERROR') return res.status(401).json({ message: response.message });
  res.status(200).json(response.data);
};

const getRole = async (req: Request, res: Response): Promise<void | Response> => {
  const email = req.body.token.sub;
  const response = await getRoleService(email);
  if (response.status === 'ERROR') return res.status(401).json({ message: response.message });
  res.status(200).json({ role: response.role });
};

export { login, getRole };
