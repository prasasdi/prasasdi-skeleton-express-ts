import { IRepositoryBase } from "./IRepositoryBase";

export interface IProdukRepository extends IRepositoryBase {
    FindByCondition(queries: string, trackChanges: boolean): [];
}