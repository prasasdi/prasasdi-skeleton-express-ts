import { HTTPMessages } from '@/enums/HTTPMessages';
import { HTTPStatusCode } from '@/enums/HTTPStatusCode';
import { TYPES } from '@containers/types/types';
import { IHTTPError } from '@contracts/IHTTPError';
import { ILoggerManager } from '@contracts/ILoggerManager';
import { Express, Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

export class ErrorHandlerMiddleware {
    static GetExceptionHandler(ILogger:ILoggerManager) {
        return (error: IHTTPError, req: Request, res: Response, next: NextFunction) => {
            const statusCode = error.statusCode || HTTPStatusCode.InternalServerError;
            const message = error.message || Object.keys(HTTPStatusCode.InternalServerError);
            ILogger.LogError(`Something went wrong : ${statusCode} ${message}`);
            
            return res.status(statusCode).send({ statusCode, message });
        };
    }
}
