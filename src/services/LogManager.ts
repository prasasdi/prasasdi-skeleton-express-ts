import { ILoggerManager } from "@contracts/ILoggerManager";
import { MeLogger } from "@utils/MeLogger";
import { injectable } from "inversify";

@injectable()
export class LoggerManager implements ILoggerManager {
    Logger = MeLogger.GetCurrentLogger();

    LogError(message:string):void {
        this.Logger.error(message);
    };
    LogWarn(message:string):void {
        this.Logger.warn(message);
    };
    LogInfo(message:string): void {
        this.Logger.info(message);
    };
    LogHttp(message:string):void {
        this.Logger.http(message);
    };
    LogDebug(message:string):void {
        this.Logger.debug(message);
    };
}