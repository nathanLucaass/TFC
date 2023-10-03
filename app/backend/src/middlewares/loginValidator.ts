import { Request, Response, NextFunction } from 'express';

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (emailRegex.test(email) && password.length >= 6) return next();
  return res.status(400).json({ message: 'Invalid email or password' });
};

export default loginValidator;
