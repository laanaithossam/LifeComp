import {NavigationViewModelBase} from "../../Framework/ViewModel/NavigationViewModelBase";
import {HomeModel} from "../../Model/HomeModel";
import {HomeService} from "../../Service/HomeService";
import {RelayCommand} from "../../Framework/Command/RelayCommand";
import {CategoryViewModel} from "../Category/CategoryViewModel"
export abstract class HomeViewModel extends NavigationViewModelBase {

  public HomeModel: HomeModel;

  constructor(public HomeService: HomeService) {
    super("Home");
    this.HomeService.GetHomeModel().subscribe(model=>this.HomeModel = model);
  }

  public NavigateToCategoryCommand:RelayCommand=new RelayCommand(
    (param)=>{
      return true;
    },
    (param)=>{
      this.Navigate(param)
    }
  );


}
