import { Container } from "inversify";
import 'reflect-metadata';
import { TYPES } from "@containers/types/types";

// Interfaces
import { ILoggerManager } from "@contracts/ILoggerManager";

// implementations
import { LoggerManager } from "@services/LogManager";

// single services
import { MeDatabaseContext } from "@utils/database/MeDatabaseContext";

export class Kernel extends Container {
    constructor() {
        super();
        this.declareDependencies();
    }

    declareDependencies() {
        this.bind<ILoggerManager>(TYPES.ILoggerManager).to(LoggerManager).inSingletonScope();
        this.bind<MeDatabaseContext>(TYPES.MeDatabaseContext).to(MeDatabaseContext);
    }
}