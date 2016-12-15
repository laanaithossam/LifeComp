import {EntityBase} from "../Shared/Model/EntityBase";
import {Observable} from "rxjs";
export abstract class ServiceProxyBase<T extends EntityBase> {
  public abstract Get(id: any): Observable<T>;
  public abstract Post(entity: T): Observable<any>;
}
