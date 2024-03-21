import { Produk } from "@/entities/Produk";

export interface IProdukService {
    FindAll(item:string):Promise<Produk[]>;
    Find(item:string):Promise<Produk>;
}