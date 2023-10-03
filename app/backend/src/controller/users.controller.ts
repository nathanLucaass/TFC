import { Request, Response } from 'express';
import { loginService } from '../service/users.services';

const login = async (req: Request, res: Response): Promise<void | Response> => {
  const { email, password } = req.body;
  const response = await loginService(email, password);
  if (response.status === 'ERROR') return res.status(404).json({ message: response.message });
  res.status(200).json(response.data);
};

export default login;
