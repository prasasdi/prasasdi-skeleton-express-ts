import { Container } from "inversify";
import 'reflect-metadata';
import { TYPES } from "@containers/types/types";

// Interfaces
import { ILoggerManager } from "@contracts/ILoggerManager";
import { IProdukRepository } from "@contracts/repositories/IProdukRepository";

// implementations
import { LoggerManager } from "@services/LogManager";
import { ProdukRepository } from "@repositories/ProdukRepositories";
// single services
import { MeDatabaseContext } from "@utils/database/MeDatabaseContext";

export class Kernel extends Container {
    constructor() {
        super({ defaultScope: "Singleton" });
        this.declareDependencies();
    }

    declareDependencies() {
        this.bind<ILoggerManager>(TYPES.ILoggerManager).to(LoggerManager).inSingletonScope();
        this.bind<MeDatabaseContext>(TYPES.MeDatabaseContext).to(MeDatabaseContext);
        this.bind<IProdukRepository>(TYPES.IProdukRepository).to(ProdukRepository);
}
}