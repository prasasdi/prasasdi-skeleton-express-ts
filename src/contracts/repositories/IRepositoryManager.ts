import { IProdukRepository } from "./IProdukRepository";

export interface IRepositoryManager {
    Produk:IProdukRepository;
    Save():void;
}
