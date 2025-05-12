import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../types/error.types';

export const errorMiddleware = (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  
  console.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
  
  res.status(status).json({ message });
};
