import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const validadeToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const token = authorization.slice(7);

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validadeToken;

// Evaluator error
