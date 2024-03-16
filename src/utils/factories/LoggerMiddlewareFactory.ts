import morgan, { StreamOptions, format } from 'morgan';
import { Kernel } from '@containers/inversify.config';

import { TYPES } from '@/containers/types/types';
import { ILoggerManager } from '@/contracts/ILoggerManager';

export class LoggerMiddlewareFactory {
    static GetLoggerMiddleware(container:Kernel) {
        // const logger = container.get<ILoggerManager>(TYPES.ILoggerManager);

        // const stream: StreamOptions = {
        //     write: (message) => logger.LogHttp(message),
        // };
        
        // // skip if env is development
        // const skip = () => {
        //     const env = process.env.NODE_ENV || 'dev' || 'development';
        //     const isDevelopment = env != 'dev' || 'development';
        //     return isDevelopment ? true : false;
        //     // return env != 'dev';
        // };
        console.log("hello from factory");
        return morgan(
            ':method :url :status :res[content-length] - :response-time ms',
            { 
                stream: {
                    write: (message) => container
                                        .get<ILoggerManager>(TYPES.ILoggerManager)
                                        .LogHttp(message),
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