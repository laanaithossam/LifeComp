import {EntityBase} from "../Entity/EntityBase";
import {EntityServiceBase} from "./EntityServiceBase";
import {RepositoryBase} from "../Repository/RepositoryBase";

export class EntityService<T extends EntityBase> extends EntityServiceBase<T> {

    public constructor(repository: RepositoryBase<T>) {
        super(repository);
    }

    Insert(entity: T): void {
        this.Repository.Insert(entity);
    }

    Update(entity: T): void {
        this.Repository.Update(entity);
    }

    Remove(entity: T): void {
        this.Repository.Remove(entity);
    }

    Find(term: any): T {
        return this.Repository.Find(term);
    }

    FindAll(term: any): Array<T> {
        return this.Repository.FindAll(term);
    }

}