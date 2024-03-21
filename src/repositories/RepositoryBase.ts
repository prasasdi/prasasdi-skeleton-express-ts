import { IRepositoryBase } from "@/contracts/repositories/IRepositoryBase";

export class RepositoryBase<T> implements IRepositoryBase<T> {
    create(item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async find(item: string): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findOne(item: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    
}