import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// .env validation
import { validateEnv } from "@utils/validateEnv";
import { MeLogger } from "@utils/MeLogger";

// app vars
dotenv.config();
validateEnv();

// init express app
export const app = express();

// REMOVE THIS AS SOON INITIATE IOC!
app.get('/logger', (_, res) =>
{
    MeLogger.error('Error');
    MeLogger.warn('Warn');
    MeLogger.info('Info');
    MeLogger.http('Http');
    MeLogger.debug('Debug');
    res.send("Hello from logger!");
})

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());