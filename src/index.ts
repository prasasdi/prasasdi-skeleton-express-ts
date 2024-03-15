import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// .env validation
import { validateEnv } from "@utils/validateEnv";
import { loggerMiddleware } from '@utils/loggerMiddleware';

// debug IOC
import { Kernel } from '@containers/inversify.config';
import { TYPES } from '@containers/types/types';

import { ILoggerManager } from '@contracts/ILoggerManager';
const iocKernel = new Kernel();
const Ilogger = iocKernel.get<ILoggerManager>(TYPES.ILoggerManager);
// end debug IOC

// app vars
dotenv.config();
validateEnv();

// init express app
export const app = express();

app.use(loggerMiddleware);

// REMOVE THIS AS SOON INITIATE IOC!
app.get('/logger', (_, res) =>
{
    Ilogger.LogInfo("Halo dari IOC");
    res.send("Hello from logger!");
})


// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());