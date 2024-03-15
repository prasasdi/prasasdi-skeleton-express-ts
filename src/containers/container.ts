import { Container } from "inversify";
import 'reflect-metadata';

import { loggerMiddleware } from "@/utils/loggerMiddleware";

const container = new Container();

container.bind<loggerMiddleware>