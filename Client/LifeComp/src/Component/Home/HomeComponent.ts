import {Component} from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';
import {HomeViewModel} from '../../ViewModel/Home/HomeViewModel';
import {HomeService} from '../../Service/HomeService';
import {NavigationService} from "../../Service/Navigation/NavigationService";
import {CategoryComponent} from "../Category/CategoryComponent"
import {User} from "../../Shared/Model/User/User"
/**
 * Created by laanaithossam on 27/09/2016.
 */
@Component({
  selector:'home-component',
  templateUrl:"./HomeView.html"
})
export class HomeComponent extends HomeViewModel {

  _nav: NavController;
  User:User;
  constructor(nav: NavController,
  homeService: HomeService, params:NavParams) {
    super(homeService);
    this._nav=nav;
    this.User=params.data;
  }
  protected OnNavigate(param:any) {
    this._nav.setRoot(CategoryComponent,param);
    console.log(param);
  }
}
