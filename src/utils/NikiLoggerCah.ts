import * as winston from 'winston';
import { ColorsEnum } from "@enums/logger/ColorsEnum";
import { LevelsEnum } from '@/enums/logger/LevelsEnum';
import { LoggerLevel } from '@/shared/LoggerLevel';

export class NikiLoggerCah {
    static GetCurrentLogger(): winston.Logger {
        // const format = winston.format.combine(
        //     winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        //     winston.format.colorize({ all: true }),
        //     winston.format.printf(
        //         (info) => `${info.timestamp} ${info.level}: ${info.message}`,
        //     ),
        // );  
        // const transports = [
        //     new winston.transports.Console(),
        //     new winston.transports.File({
        //         filename: `${process.env.LOG_FILEPATH}/error.log`,
        //         level: 'error'
        //     }),
        //     new winston.transports.File({ filename: `${process.env.LOG_FILEPATH}/all.log`})
        // ];
        winston.addColors(ColorsEnum);

        return winston.createLogger({
            level: LoggerLevel(),
            levels: LevelsEnum,
            format: winston.format.combine(
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
                winston.format.colorize({ all: true }),
                winston.format.printf(
                    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
                ),
            ),
            transports : [
                new winston.transports.Console(),
                new winston.transports.File({
                    filename: `${process.env.LOG_FILEPATH}/error.log`,
                    level: 'error'
                }),
                new winston.transports.File({ 
                    filename: `${process.env.LOG_FILEPATH}/all.log`
                })
            ],
        });
    }
};