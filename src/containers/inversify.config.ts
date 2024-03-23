import { Container } from "inversify";
import 'reflect-metadata';
import { TYPES } from "@containers/types/types";

// Interfaces
import { ILoggerManager } from "@contracts/ILoggerManager";

// implementations
import { LoggerManager } from "@services/LogManager";

// single services
import { MeDatabaseContext } from "@utils/database/MeDatabaseContext";
import { IRepositoryManager } from "@/contracts/repositories/IRepositoryManager";
import { RepositoryManager } from "@/repositories/RepositoryManager";
import { IControllerManager } from "@/contracts/IControllerManager";
import { ControllerManager } from "@/controllers/ControllerManager";
import { IServiceManager } from "@/services/contracts/IServiceManager";
import { ServiceManager } from "@/services/ServiceManager";

export class Kernel extends Container {
    constructor() {
        super({ defaultScope: "Singleton" });
        this.declareDependencies();
    }

    declareDependencies() {
        this.bind<ILoggerManager>(TYPES.ILoggerManager).to(LoggerManager).inSingletonScope();
        this.bind<IControllerManager>(TYPES.IControllerManager).to(ControllerManager);
        this.bind<MeDatabaseContext>(TYPES.MeDatabaseContext).to(MeDatabaseContext);

        //lazy

        // bind context into container
        this.bind<IRepositoryManager>(TYPES.IRepositoryManager).to(RepositoryManager);
        this.bind<IServiceManager>(TYPES.IServiceManager).to(ServiceManager);
    }
}