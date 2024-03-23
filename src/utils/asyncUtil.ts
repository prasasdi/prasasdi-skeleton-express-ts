import { Request, Response, NextFunction } from 'express';

export const asyncUtil = (fn: Function) => {
    return function wrapper(...args: any[]) {
        const fnReturn = fn(...args);
        const next = args[args.length - 1] as NextFunction;
        return Promise.resolve(fnReturn).catch((error: Error) => next(error));
    };
};