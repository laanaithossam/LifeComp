import {AuthenticationServiceEnum} from "./AuthenticationServiceEnum";
import {FacebookAuthenticationService} from "./FacebookAuthenticationService";
import {GoogleAuthenticationService} from "./GoogleAuthenticationService";
import {TwitterAuhtenticationService} from "./TwitterAuhtenticationService";
import {SecurityServiceBase} from "./SecurityServiceBase";
export class AuhtenticationServiceProvider {

  GetService(authenticationServiceEnum: AuthenticationServiceEnum): SecurityServiceBase {
    switch (authenticationServiceEnum) {
      case AuthenticationServiceEnum.Facebook:
        return new FacebookAuthenticationService();
      case AuthenticationServiceEnum.Google:
        return new GoogleAuthenticationService();
      case AuthenticationServiceEnum.Twitter:
        return new TwitterAuhtenticationService;
    }
  }
}
