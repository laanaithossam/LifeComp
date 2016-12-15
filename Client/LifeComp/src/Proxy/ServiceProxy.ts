import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {ServiceProxyBase} from "./ServiceProxyBase";
import {EntityBase} from "../Shared/Model/EntityBase";
import {Observable} from "rxjs";

export class ServiceProxy extends ServiceProxyBase<EntityBase> {

  private _httpService: Http;
  private _urlBase: string;

  constructor(httpService: Http, urlBase: string) {
    super();
    this._httpService = httpService;
    this._urlBase = urlBase;
  }

  private getData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  public Get(id: any): Observable<EntityBase> {
    return this._httpService.get(this._urlBase + '/' + id).map(this.getData).catch(this.handleError);
  }

  public Post(entity: EntityBase): Observable<EntityBase> {
    let body = JSON.stringify(entity);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._httpService.post(this._urlBase, body, options)
      .map(this.getData)
      .catch(this.handleError);
  }

  public Put(entity: EntityBase): Observable<any> {
    let body = JSON.stringify(entity);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._httpService.put(this._urlBase, body, options)
      .map(this.getData)
      .catch(this.handleError);
  }

  public Delete(entity: EntityBase): Observable<boolean> {
    return this._httpService.delete(this._urlBase + '/' + entity.Id)
      .map(this.getData)
      .catch(this.handleError);
  }


}
