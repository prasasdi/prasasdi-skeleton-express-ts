import { Express } from "express";

export interface IControllerManager {
    ConfigureController(app:Express): void;
}