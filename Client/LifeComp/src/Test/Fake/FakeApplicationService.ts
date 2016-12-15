import {Observable} from "rxjs";
import {ServiceProxyBase} from "../../Proxy/ServiceProxyBase";
import {EntityBase} from "../../Shared/Model/EntityBase";

export class FakeApplicationService<T extends EntityBase> extends ServiceProxyBase<T> {

  private _storage: Array<T>;

  public constructor(storage: Array<T>) {
    super();
    this._storage = storage;
  }

  public Get(id: any): Observable<T> {
    return Observable.create((observer)=> observer.next(this._storage.filter((x)=>JSON.stringify(id) === JSON.stringify(id))[0]));
  }

  public Post(entity: T): Observable<any> {
    this._storage.push(entity);
    return Observable.create((observer)=> observer.next(entity));
  }

  /*
   public Get(): Observable<Array<T>> {
   return Observable.create(undefined);
   }
   public Put(entity: T): Observable<any> {
   var index = this._storage.indexOf(entity);
   this._storage.splice(index, 1);
   return Observable.create(this.Post(entity));
   }

   public Delete(entity: T): Observable<boolean> {
   var index = this._storage.indexOf(entity);
   this._storage.splice(index, 1);
   return Observable.create(true);
   }
   */
}
