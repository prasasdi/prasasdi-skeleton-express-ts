import { TYPES } from "@/containers/types/types";
import { ILoggerManager } from "@/contracts/ILoggerManager";
import { IProdukRepository } from "@/contracts/repositories/IProdukRepository";
import { IRepositoryBase } from "@/contracts/repositories/IRepositoryBase";
import { Produk } from "@/entities/Produk";
import { MeDatabaseContext } from "@/utils/database/MeDatabaseContext";
import { injectable, inject } from "inversify";

export class ProdukRepository implements IProdukRepository {
    private DBContext:MeDatabaseContext;
    constructor(DBContext) {
        this.DBContext = DBContext;
    }
    create(item: Produk): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: Produk): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async find(item: string): Promise<Produk[]> {
        return (await this.DBContext.pool.query('select * from produk')).rows;
    }
    async findOne(item: string): Promise<Produk> {
        return (await this.DBContext.pool.query('select * from "produk" where id = $1', [item])).rows[0];
    }

    
}