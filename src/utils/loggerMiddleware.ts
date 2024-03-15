import morgan, { StreamOptions, format } from 'morgan';

import { MeLogger } from "@utils/MeLogger";

const stream: StreamOptions = {
    write: (message) => MeLogger.http(message),
};

// skip if env is development
const skip = () => {
    const env = process.env.NODE_ENV || 'dev' || 'development';
    const isDevelopment = env != 'dev' || 'development';
    return isDevelopment ? true : false;
    // return env != 'dev';
};

export const loggerMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { stream, skip }
);