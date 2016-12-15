import {MenuItem} from "./MenuItem";
import {AccountComponent} from "../Account/AccountComponent";
import {HomeComponent} from "../Home/HomeComponent";

export class MenuRegister {

  public Items:Array<MenuItem> = [
    {Name: 'Home', IconName: 'home', ViewModel: HomeComponent},
    {Name: 'Account', IconName: 'contact', ViewModel: AccountComponent},
    ]
}
