import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// .env validation
import { validateEnv } from "@utils/validateEnv";

// app vars
dotenv.config();
validateEnv();

// init express app
export const app = express();


// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
