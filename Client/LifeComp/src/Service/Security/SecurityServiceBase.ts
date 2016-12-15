import {User} from "../../Shared/Model/User/User";
export abstract class SecurityServiceBase {
  public abstract Authenticate(username: string, password: string): User;
}
