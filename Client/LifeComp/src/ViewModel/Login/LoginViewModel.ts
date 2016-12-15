import {SecurityServiceBase} from "../../Service/Security/SecurityServiceBase";
import {RelayCommand} from "../../Framework/Command/RelayCommand";
import {User} from "../../Shared/Model/User/User";
import {NavigationViewModelBase} from "../../Framework/ViewModel/NavigationViewModelBase";

export abstract class LoginViewModel extends NavigationViewModelBase {
  constructor(public SecurityService: SecurityServiceBase) {
    super("Login");
  }

  public Username: string;
  public Password: string;

  public LoginCommand: RelayCommand = new RelayCommand(()=> {
    if (this.Username && this.Password)
      return true;
    return false;
  }, (param)=> {
    console.log(param);
    this.Login();
  });

  public Login(): void {
    let user: User = this.SecurityService.Authenticate(this.Username, this.Password);
    this.Navigate(user);
  }
}
