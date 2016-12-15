
import {RepositoryBase} from "../Domain/Repository/RepositoryBase";
import {EntityBase} from "../Domain/Entity/EntityBase";
/**
 * Created by laanaithossam on 11/09/2016.
 */

export class FakeRepository<T extends EntityBase> extends RepositoryBase<T> {

    private _storage: Array<T>;

    public constructor(storage: Array<T>) {
        super();
        this._storage = storage;
    }

    Find(entity: T): T {
        return this._storage.filter((x)=>JSON.stringify(x) === JSON.stringify(entity))[0];
    }

    FindAll(entity: T): Array<T> {
        return undefined;
    }

    Insert(entity: T): T {
        this._storage.push(entity);
        return entity;
    }

    Update(entity: T): void {
        var index = this._storage.indexOf(entity);
        this._storage.splice(index, 1);
        this.Insert(entity);
    }

    Remove(entity: T): void {
        var index = this._storage.indexOf(entity);
        this._storage.splice(index, 1);
    }

}