import {EntityBase} from "../Entity/EntityBase";
export abstract class RepositoryBase<T extends EntityBase> {
    abstract Insert(entity: T): T;

    abstract Update(entity: T): void;

    abstract Remove(entity: T): void;

    abstract Find(term: any): T;

    abstract FindAll(term: any): Array<T>;
}
