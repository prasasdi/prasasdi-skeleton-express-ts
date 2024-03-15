import { Container } from "inversify";
import 'reflect-metadata';
import { TYPES } from "@containers/types/types";

//
import { ILoggerManager } from "@/contracts/ILoggerManager";
import { LoggerManager } from "@/services/LogManager";
//

export class Kernel extends Container {
    constructor() {
        super();
        this.declareDependencies();
    }

    declareDependencies() {
        this.bind<ILoggerManager>(TYPES.ILoggerManager).to(LoggerManager).inSingletonScope();
    }
}