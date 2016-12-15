import { Injectable } from '@angular/core';
import {SecurityServiceBase} from "./SecurityServiceBase";
import {User} from "../../Shared/Model/User/User";

@Injectable()
export class FakeSecurityService extends SecurityServiceBase {

  Authenticate(username: string, password: string): User {
    var user: User = {
      Id: 1,
      FirstName: 'Hossam',
      LastName: 'LAANAIT',
      Email: '',
      Features: []
    };

    return user;
  }

}
