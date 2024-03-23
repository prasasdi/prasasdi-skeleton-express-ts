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
import { ProdukNotFoundException } from './entities/exceptions/Produk/ProdukNotFoundException';
import { ProdukNoContentException } from './entities/exceptions/Produk/ProdukNoContentException';
import { IControllerManager } from './contracts/IControllerManager';
//

// app vars
dotenv.config();
validateEnv();

// init express app
export const app:express.Express = express();

const logger = iocKernel.get<ILoggerManager>(TYPES.ILoggerManager);
const controllers = iocKernel.get<IControllerManager>(TYPES.IControllerManager);




app.use(LoggerMiddleware.GetLoggerMiddleware(logger));

app.use(ErrorHandlerMiddleware.GetExceptionHandler(logger));


controllers.ConfigureController(app);



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
    throw new ProdukNoContentException("12AC");
});
// middlewares
app.use(helmet());
app.use(cors());
// use expection handler middlewares
app.use(express.urlencoded({
    extended: true
}));
app.use(methodOverride());
app.use(express.json());
