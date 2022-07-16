import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from './../models/error-handler.model';

/**
 * @param err Error caught by Express.js
 * @param req Request object provided by Express
 * @param res Response object provided by Express
 * @param next NextFunction function provided by Express
 */

export function handleError(
  err: TypeError | ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customError = err;

  if (!(err instanceof ErrorHandler)) {
    customError = new ErrorHandler(
        'Oh no, this is embarrasing. We are having troubles my friend'
    );
  }
  res.status((customError as ErrorHandler).status).send(customError);
};

export default handleError;