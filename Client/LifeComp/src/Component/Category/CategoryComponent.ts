import {NavParams, NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import{CategoryViewModel} from '../../ViewModel/Category/CategoryViewModel'
import {NavigationService} from '../../Service/Navigation/NavigationService';
import {Category} from '../../Shared/Model/Interest/Category';
@Component({
    selector:'category-component',
    templateUrl:'./CategoryView.html'
})
export class CategoryComponent extends CategoryViewModel{

    Category:Category;
    constructor(nav: NavController , params:NavParams){
        super();
        this.Category=params.data;
    }
    
    public OnNavigate(param:any):void{
        console.log(param);
    }
}