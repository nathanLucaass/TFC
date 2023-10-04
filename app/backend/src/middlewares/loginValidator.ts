import { Request, Response, NextFunction } from 'express';

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });
  console.log('passou');

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email) || password.length < 6) {
    return res
      .status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default loginValidator;
