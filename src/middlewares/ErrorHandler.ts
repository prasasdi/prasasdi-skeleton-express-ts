import { TYPES } from '@/containers/types/types';
import { ILoggerManager } from '@/contracts/ILoggerManager';
import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';

// express udah tau selama kita kasih error didalam callbacknya
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
    console.log(error.stack);
    if (req.xhr) {
    res.status(500).send({
        error: "something failed!"
    })} else {
        next(error);
    }
};
