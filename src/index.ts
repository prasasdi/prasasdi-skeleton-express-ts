import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// .env validation
import { validateEnv } from "@utils/validateEnv";
import { loggerMiddleware } from '@utils/loggerMiddleware';

// app vars
dotenv.config();
validateEnv();

// init express app
export const app = express();

app.use(loggerMiddleware);

// REMOVE THIS AS SOON INITIATE IOC!
app.get('/logger', (_, res) =>
{
    res.send("Hello from logger!");
})


// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());