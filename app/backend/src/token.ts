import * as jwt from 'jsonwebtoken';

export type TokenPayload = {
  token: string;
};

export const generateToken = (username: string, password: string): TokenPayload => {
  const jwtPayload = {
    sub: username,
    password,
  };
  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return { token };
};
