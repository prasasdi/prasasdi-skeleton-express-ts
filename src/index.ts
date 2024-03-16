import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// .env validation
import { validateEnv } from "@utils/validateEnv";
import { LoggerMiddlewareFactory } from '@/utils/factories/LoggerMiddlewareFactory';

// debug IOC
import { Kernel } from '@containers/inversify.config';
import { ILoggerManager } from './contracts/ILoggerManager';
import { TYPES } from './containers/types/types';
const iocKernel = new Kernel();
// end debug IOC

// app vars
dotenv.config();
validateEnv();

// init express app
export const app = express();

app.use(LoggerMiddlewareFactory.GetLoggerMiddleware(iocKernel));

// REMOVE THIS AS SOON INITIATE ROUTES!
app.get('/logger', (_, res) =>
{
    res.send("Hello from logger!");
});
app.get('/logger/error/:msg', (req, res) => {
    iocKernel.get<ILoggerManager>(TYPES.ILoggerManager).LogError(req.params["msg"]);
    res.send("Error ini, belum kirim tetekbengeknya");
});
// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());