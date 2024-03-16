import { Container } from "inversify";
import 'reflect-metadata';
import { TYPES } from "@containers/types/types";

//
import { ILoggerManager } from "@/contracts/ILoggerManager";
import { LoggerManager } from "@/services/LogManager";
import { MeDatabaseContext } from "@/utils/database/MeDatabaseContext";
//
const container = new Container({ 
    defaultScope: "Singleton",
});

// container.bind<ILoggerManager>(TYPES.ILoggerManager).to(LoggerManager);
// container.bind<MeDatabaseContext>(TYPES.MeDatabaseContext).to(MeDatabaseContext);