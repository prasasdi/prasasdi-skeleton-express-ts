import { HTTPStatusCode } from "@enums/HTTPStatusCode";
import createHttpError from "http-errors";

export class ProdukNoContentException {
    constructor(id:string) {
        throw createHttpError(HTTPStatusCode.NoContent, `Produk with Id ${id} return empty`);
    }
}