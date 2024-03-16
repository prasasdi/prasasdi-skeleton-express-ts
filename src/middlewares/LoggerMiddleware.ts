import morgan, { StreamOptions, format } from 'morgan';
import { TYPES } from '@containers/types/types';
import { ILoggerManager } from '@contracts/ILoggerManager';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';

@injectable()
export class LoggerMiddleware {
    static GetLoggerMiddleware(ILogger: ILoggerManager) {
        return morgan(
            ':method :url :status :res[content-length] - :response-time ms',
            { 
                stream: {
                    write: (message) => ILogger.LogHttp(message),
            }, 
                skip: () => {
                    return false;
                    const env = process.env.NODE_ENV || 'dev' || 'development';
                    const isDevelopment = env != 'dev' || 'development';
                    return isDevelopment ? true : false;
                // return env != 'dev';
            }}
        );
    };
}