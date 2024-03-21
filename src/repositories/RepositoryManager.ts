import { TYPES } from "@/containers/types/types";
import { IProdukRepository } from "@/contracts/repositories/IProdukRepository";
import { IRepositoryManager } from "@/contracts/repositories/IRepositoryManager";
import { Lazy } from "@/utils/LazyInitializer";
import { MeDatabaseContext } from "@/utils/database/MeDatabaseContext";
import { inject, injectable } from "inversify";
import { ProdukRepository } from "./ProdukRepository";

@injectable()
export class RepositoryManager implements IRepositoryManager{
    _produk:Lazy<IProdukRepository>;

    constructor(@inject(TYPES.MeDatabaseContext) context) {

        this._produk = new Lazy<IProdukRepository>(() => new ProdukRepository(context));
    }

    get Produk():IProdukRepository {
        return this._produk.value;
    }

    Save(): void {

    }
}