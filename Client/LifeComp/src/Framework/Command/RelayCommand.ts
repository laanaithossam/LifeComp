import {Func} from "../../Shared/Framework/Func";
import {Action} from "../../Shared/Framework/Action";
export class RelayCommand{

  CanExecute: Func<any,boolean>;
  Execute: Action<any>;

  constructor(canExecute: Func<any,boolean>, execute: Action<any>) {
    this.CanExecute = canExecute;
    this.Execute = execute;
    }
}
