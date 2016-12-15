import {ViewModelBase} from "./ViewModelBase";
export abstract class NavigationViewModelBase extends ViewModelBase {

  constructor(title) {
    super(title);
  }

  protected Navigate(param?:any):void {
    this.OnNavigate(param);
  }

  protected abstract OnNavigate(params?:any):void;
}
