import * as winston from 'winston';
import { ColorsEnum } from "@enums/logger/ColorsEnum";
import { LevelsEnum } from '@/enums/logger/LevelsEnum';
import { LoggerLevel } from '@/shared/LoggerLevel';

winston.addColors(ColorsEnum);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: 'logs/error.log',
        level: 'error'
    }),
    new winston.transports.File({ filename: 'logs/all.log'})
];

export const MeLogger = winston.createLogger({
    level: LoggerLevel(),
    levels: LevelsEnum,
    format,
    transports,
});