import { HTTPStatusCode } from "@enums/HTTPStatusCode";
import createHttpError from "http-errors";

export class ProdukNotFoundException {
    constructor(message = 'Bad Request') {
        throw createHttpError(HTTPStatusCode.NotFound, message);
    }
}