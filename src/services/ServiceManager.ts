import { inject, injectable } from "inversify";
import { IServiceManager } from "@services/contracts/IServiceManager";
import { IProdukService } from "@services/contracts/IProdukService";
import { IRepositoryManager } from "@contracts/repositories/IRepositoryManager";
import { TYPES } from "@/containers/types/types";
import { ILoggerManager } from "@/contracts/ILoggerManager";
import { Lazy } from "@/utils/LazyInitializer";
import { ProdukService } from "./ProdukService";

@injectable()
export class ServiceManager implements IServiceManager {
    _produk:Lazy<IProdukService>;

    constructor(@inject(TYPES.IRepositoryManager) repository, @inject(TYPES.ILoggerManager) logger,) {

        this._produk = new Lazy<IProdukService>(() => new ProdukService(repository, logger));
    }

    Produk: IProdukService;

}