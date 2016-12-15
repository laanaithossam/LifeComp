import {SecurityServiceBase} from "./SecurityServiceBase";
import {User} from "../../Shared/Model/User/User";
export class GoogleAuthenticationService extends SecurityServiceBase {

  Authenticate(username: string, password: string): User {
    return new User();
  }

}
