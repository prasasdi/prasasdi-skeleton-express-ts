export interface IRepositoryBase {
    FindAll(trackChanges: boolean): [];
    Create(entity: object): void;
    Delete(entity: object): void;
    Update(entity: object): void;
}