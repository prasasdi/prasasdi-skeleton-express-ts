import express from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '@/containers/types/types';
import { ILoggerManager } from '@/contracts/ILoggerManager';
import { ProdukController } from './ProdukControllers/ProduKController';
import { IRepositoryManager } from '@/contracts/repositories/IRepositoryManager';
import { IServiceManager } from '@/services/contracts/IServiceManager';

@injectable()
export class ControllerManager {
    logger: ILoggerManager;
    service: IServiceManager
    constructor(@inject(TYPES.ILoggerManager) logger, @inject(TYPES.IServiceManager) service) {
        this.logger = logger;
        this.service = service;
    }
    ConfigureController(app:express.Express) {
        ProdukController.inisiasiController(app, this.service);
    }
}