export interface ILoggerManager{
    LogError: (message:string) => void;
    LogWarn: (message:string) => void;
    LogInfo: (message:string) => void;
    LogHttp: (message:string) => void;
    LogDebug: (message:string) => void;
}