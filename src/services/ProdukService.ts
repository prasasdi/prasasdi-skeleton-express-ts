import { Produk } from "@/entities/Produk";
import { IProdukService } from "./contracts/IProdukService";
import { injectable } from "inversify";
import { IRepositoryManager } from "@/contracts/repositories/IRepositoryManager";
import { ILoggerManager } from "@/contracts/ILoggerManager";
import { ProdukNotFoundException } from "@/entities/exceptions/Produk/ProdukNotFoundException";

import to from 'await-to-js';
import { IHTTPError } from "@/contracts/IHTTPError";
import { HTTPStatusCode } from "@/enums/HTTPStatusCode";
import { BadRequestException } from "@/entities/exceptions/BadRequestException";

export class ProdukService implements IProdukService {
    repository: IRepositoryManager;
    logger: ILoggerManager;

    constructor(repository: IRepositoryManager, logger: ILoggerManager) {
        this.repository = repository;
        this.logger = logger;
    }

    async FindAll(item: string): Promise<Produk[]> {
        return await this.repository.Produk.find(item);
    }
    async Find(item: string): Promise<Produk> {
        const [err, produkEntity] = await to(this.repository.Produk.findOne(item));
        if (err) {
            const error = err as IHTTPError
            console.log(`ini error :>> ${error} dengan kode ${error.statusCode}`);
            if (error.statusCode == undefined) {
                console.log('ini')
                throw new BadRequestException(error.message);
            }
        }
        return produkEntity; // Return the found produkEntity
    }
} 