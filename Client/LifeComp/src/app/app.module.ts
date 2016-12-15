import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
//Services
import {MenuRegister} from "../Component/Menu/MenuRegister";
import {MenuItem} from "../Component/Menu/MenuItem";
import {FakeSecurityService} from "../Service/Security/FakeSecurityService";
import {SecurityServiceBase} from "../Service/Security/SecurityServiceBase";
import {HomeService} from "../Service/HomeService";
import {FakeHomeService} from "../Test/Fake/FakeHomeService";
//Directives
import {CommandDirective} from "../Framework/Command/CommandDirective";
//Components
import {LoginComponent} from '../Component/Login/LoginComponent'
import {HomeComponent} from '../Component/Home/HomeComponent'
import {CategoryComponent} from '../Component/Category/CategoryComponent'


@NgModule({
  declarations: [
    MyApp,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
    CommandDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
  ],
  providers: [
  {provide: SecurityServiceBase, useClass: FakeSecurityService},
  {provide: HomeService, useClass: FakeHomeService},
  ]
})
export class AppModule {}
