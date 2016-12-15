import { Injectable } from '@angular/core';
import {FakeApplicationService} from "./FakeApplicationService";
import {HomeService} from "../../Service/HomeService";
import {FakeCategory} from "./FakeCategory";
import {HomeModel} from "../../Model/HomeModel";

export class FakeHomeService extends HomeService {
  constructor() {
    super(new FakeApplicationService<HomeModel>(
      [
        {Id: 0, Title: 'What are you looking for', Categories: [
          {Id:0,Description:'Desc0',Value:'Cat0',Features:[]},
          {Id:1,Description:'Desc1',Value:'Cat1',Features:[]},
          {Id:2,Description:'Desc2',Value:'Cat2',Features:[]}
        ]}
      ]));
  }
}
