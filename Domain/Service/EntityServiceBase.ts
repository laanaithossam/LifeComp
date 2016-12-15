import {EntityBase} from "../Entity/EntityBase";
import {RepositoryBase} from "../Repository/RepositoryBase";
export abstract class EntityServiceBase<T extends EntityBase> {

    protected Repository: RepositoryBase<T>;

    constructor(repository: RepositoryBase<T>) {
        this.Repository = repository;
    }

    abstract Insert(entity: T): void;

    abstract Update(entity: T): void;

    abstract Remove(entity: T): void;
    abstract Find(term:any):T;
    abstract FindAll(term:any):Array<T>;
}