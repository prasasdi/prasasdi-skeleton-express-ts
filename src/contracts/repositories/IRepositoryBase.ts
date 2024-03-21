export interface IRepositoryBase<T> {
    create(item:T): Promise<boolean>;
    update(id:string, item:T): Promise<boolean>;
    delete(id:string): Promise<boolean>;

    find(item:string): Promise<T[]>;
    findOne(item:string): Promise<T>;
}