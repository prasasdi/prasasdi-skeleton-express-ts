import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// .env validation
import { validateEnv } from "@utils/validateEnv";
import { LoggerMiddleware } from '@/middlewares/LoggerMiddleware';

// debug IOC
import { Kernel } from '@containers/inversify.config';
import { ILoggerManager } from './contracts/ILoggerManager';
import { TYPES } from './containers/types/types';
const iocKernel:Kernel = new Kernel();
// end debug IOC

// error handling middleware
import methodOverride from 'method-override';
import { ErrorHandlerMiddleware } from '@/middlewares/ErrorHandlerMiddleware';
// end error handling middleware

// debug error
import { BadRequestException } from '@entities/exceptions/BadRequestException';
import { IProdukRepository } from './contracts/repositories/IProdukRepository';
//

// app vars
dotenv.config();
validateEnv();

// init express app
export const app:express.Express = express();

const logger = iocKernel.get<ILoggerManager>(TYPES.ILoggerManager);
app.use(LoggerMiddleware.GetLoggerMiddleware(logger));

// REMOVE THIS AS SOON INITIATE ROUTES!
app.get('/logger', (_, res) =>
{
    res.send("Hello from logger!");
});
app.get('/logger/error/:msg', (req, res, next) => {
    try {
        throw new BadRequestException(req.params["msg"]);
    } catch(error) {
        return next(error);
    }
});
app.get('/repos', (_, res, next) => {
    const repo = iocKernel.get<IProdukRepository>(TYPES.IProdukRepository);
    try {
        repo.FindByCondition("", false);
        res.send("Gol ini");
    } catch(error) {
        throw new BadRequestException(error);
    }
})
// middlewares
app.use(helmet());
app.use(cors());
// use expection handler middlewares
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride());
app.use(express.json());

app.use(ErrorHandlerMiddleware.GetExceptionHandler(logger));