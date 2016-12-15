import { Injectable } from '@angular/core';
import {ServiceProxyBase} from "../Proxy/ServiceProxyBase";
import {HomeModel} from "../Model/HomeModel";
import {Observable} from "rxjs";

export class HomeService {
  constructor(private _serviceProxy: ServiceProxyBase<HomeModel>) {
  }

  public GetHomeModel(): Observable<HomeModel> {
    return this._serviceProxy.Get(0);
  }
}
