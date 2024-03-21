import { Produk } from "@/entities/Produk";
import { IProdukService } from "./contracts/IProdukService";
import { injectable } from "inversify";
import { IRepositoryManager } from "@/contracts/repositories/IRepositoryManager";
import { ILoggerManager } from "@/contracts/ILoggerManager";
import { ProdukNotFoundException } from "@/entities/exceptions/ProdukNotFoundException";

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
        try {
            const produkEntity = await this.repository.Produk.findOne(item);
            if (!produkEntity) {
                throw new ProdukNotFoundException(`Produk dengan ID : ${item} tidak ditemukan!`);
            }
            console.log(produkEntity);
            return produkEntity; // Return the found produkEntity
        } catch (error) {
            this.logger.LogError(error);
            throw error; // Rethrow the error to propagate it further
        }
    }
    
} 