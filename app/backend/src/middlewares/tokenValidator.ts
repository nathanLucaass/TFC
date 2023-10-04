import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = process.env.JWT_SECRET || 'jwt_secret';

const validadeToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const token = authorization.slice(7);

  try {
    req.body.token = jwt.verify(token, secret);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default validadeToken;

// Evaluator error
