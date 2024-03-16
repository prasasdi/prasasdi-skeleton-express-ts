import { TYPES } from "@/containers/types/types";
import { ILoggerManager } from "@/contracts/ILoggerManager";
import { IProdukRepository } from "@/contracts/repositories/IProdukRepository";
import { IRepositoryBase } from "@/contracts/repositories/IRepositoryBase";
import { MeDatabaseContext } from "@/utils/database/MeDatabaseContext";
import { injectable, inject } from "inversify";

@injectable()
export class ProdukRepository implements IProdukRepository {
    private Logger:ILoggerManager;
    private DBContext:MeDatabaseContext;
    constructor(@inject(TYPES.ILoggerManager) ILogger:ILoggerManager, @inject(TYPES.MeDatabaseContext) DBContext) {
        this.Logger = ILogger;
        this.DBContext = DBContext;

        this.Logger.LogDebug("inject via @inject dalam class @injectable");
    }

    FindByCondition(queries: string, trackChanges: boolean): [] {
        throw new Error("Method not implemented.");
    }
    FindAll(trackChanges: boolean): [] {
        throw new Error("Method not implemented.");
    }
    Create(entity: object): void {
        throw new Error("Method not implemented.");
    }
    Delete(entity: object): void {
        throw new Error("Method not implemented.");
    }
    Update(entity: object): void {
        throw new Error("Method not implemented.");
    }

}