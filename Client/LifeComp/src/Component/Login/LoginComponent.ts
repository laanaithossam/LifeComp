import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginViewModel} from "../../ViewModel/Login/LoginViewModel";
import {HomeComponent} from "../Home/HomeComponent";
import {SecurityServiceBase} from "../../Service/Security/SecurityServiceBase";
import {User} from "../../Shared/Model/User/User";
@Component({
  selector:'login-component',
  templateUrl: "./LoginView.html"
})
export class LoginComponent extends LoginViewModel {

  _nav: NavController;

  constructor(nav: NavController,
   securityService: SecurityServiceBase) {
    super(securityService);
    this._nav = nav;
  }

  protected OnNavigate(param: any) {
     let user: User = this.SecurityService.Authenticate(this.Username, this.Password);
    this._nav.setRoot(HomeComponent,param);
  }

}
