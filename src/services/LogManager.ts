import { ILoggerManager } from "@/contracts/ILoggerManager";
import { MeLogger } from "@/utils/MeLogger";
import { injectable } from "inversify";

@injectable()
export class LoggerManager implements ILoggerManager {
    LogError(message:string):void {
        MeLogger.error(message);
    };
    LogWarn(message:string):void {
        MeLogger.warn(message);
    };
    LogInfo(message:string): void {
        MeLogger.info(message);
    };
    LogHttp(message:string):void {
        MeLogger.http(message);
    };
    LogDebug(message:string):void {
        MeLogger.debug(message);
    };
}