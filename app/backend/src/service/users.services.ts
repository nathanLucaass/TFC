import * as bcrypt from 'bcryptjs';
import UsersModel from '../database/models/UsersModel';
import { generateToken, TokenPayload } from '../token';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type UserResponse = {
  status: 'SUCCESS',
  data: TokenPayload
} | {
  status: 'ERROR',
  message: string
};

export const loginService = async (email: string, password: string): Promise<UserResponse> => {
  if (!email || !password) return { status: 'ERROR', message: 'All fields must be filled' };

  const user = await UsersModel.findOne({ where: { email } });

  if (!user) return { status: 'ERROR', message: 'User not found' };

  if (!bcrypt.compareSync(password, user
    .password)) return { status: 'ERROR', message: 'Invalid password' };

  const token = generateToken(email, password);

  return { status: 'SUCCESS', data: token };
};
