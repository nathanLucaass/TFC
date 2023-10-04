import * as jwt from 'jsonwebtoken';

export type TokenPayload = {
  token: string;
};
const secret = process.env.JWT_SECRET || 'jwt_secret';
export const generateToken = (username: string): TokenPayload => {
  const jwtPayload = {
    sub: username,
  };
  const token = jwt.sign(jwtPayload, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
  return { token };
};
