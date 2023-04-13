import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const TOKEN = process.env.TOKEN;
    const tokenHeader = req.headers.authorization || null;
    const tokenUser = tokenHeader?.split(' ').pop();
    if (!tokenUser || tokenUser !== TOKEN) {
      res.status(401).send('NO_VALID_TOKEN');
    } else {
      next();
    }
  } catch (err) {
    res.status(400).send('NO_VALID_SESSION');
  }
};

export { verifyToken };
