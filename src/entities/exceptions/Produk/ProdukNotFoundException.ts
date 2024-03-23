import { HTTPStatusCode } from "@enums/HTTPStatusCode";
import createHttpError from "http-errors";

export class ProdukNotFoundException {
    constructor(id:string) {
        throw createHttpError(HTTPStatusCode.NotFound, `Produk with id ${id} is not found in database`);
    }
}