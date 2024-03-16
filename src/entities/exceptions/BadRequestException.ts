import { HTTPStatusCode } from "@enums/HTTPStatusCode";
import createHttpError from "http-errors";

export class BadRequestException {
    constructor(message = 'Bad Request') {
        throw createHttpError(HTTPStatusCode.InternalServerError, message);
    }
}