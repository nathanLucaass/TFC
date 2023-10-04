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

type RoleResponse = {
  status: 'SUCCESS',
  role: string
} | {
  status: 'ERROR',
  message: string
};

export const loginService = async (email: string, password: string): Promise<UserResponse> => {
  console.log(email, 'email');
  const errorMensage = 'Invalid email or password';
  const user = await UsersModel.findOne({ where: { email } });

  if (!user) return { status: 'ERROR', message: errorMensage };

  if (!bcrypt.compareSync(password, user
    .password)) return { status: 'ERROR', message: errorMensage };

  const token = generateToken(email);

  return { status: 'SUCCESS', data: token };
};

export const getRoleService = async (email: string): Promise<RoleResponse> => {
  const user = await UsersModel.findOne({ where: { email } });
  console.log(user);

  if (!user) return { status: 'ERROR', message: 'User not found' };

  return { status: 'SUCCESS', role: user.dataValues.role };
};
