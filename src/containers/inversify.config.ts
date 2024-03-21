import { Container } from "inversify";
import 'reflect-metadata';
import { TYPES } from "@containers/types/types";

// Interfaces
import { ILoggerManager } from "@contracts/ILoggerManager";
import { IProdukRepository } from "@contracts/repositories/IProdukRepository";

// implementations
import { LoggerManager } from "@services/LogManager";
import { ProdukRepository } from "@/repositories/ProdukRepository";

// single services
import { MeDatabaseContext } from "@utils/database/MeDatabaseContext";
import { IRepositoryBase } from "@/contracts/repositories/IRepositoryBase";
import { RepositoryBase } from "@/repositories/RepositoryBase";
import { Produk } from "@/entities/Produk";
import { IRepositoryManager } from "@/contracts/repositories/IRepositoryManager";
import { RepositoryManager } from "@/repositories/RepositoryManager";

export class Kernel extends Container {
    constructor() {
        super({ defaultScope: "Singleton" });
        this.declareDependencies();
    }

    declareDependencies() {
        this.bind<ILoggerManager>(TYPES.ILoggerManager).to(LoggerManager).inSingletonScope();
        this.bind<MeDatabaseContext>(TYPES.MeDatabaseContext).to(MeDatabaseContext);

        //lazy

        // bind context into container
        this.bind<IRepositoryManager>(TYPES.IRepositoryManager).to(RepositoryManager);
    }
}