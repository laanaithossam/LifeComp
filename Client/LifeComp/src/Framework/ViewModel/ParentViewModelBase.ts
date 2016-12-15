import {ViewModelBase} from "./ViewModelBase";

export class ParentViewModelBase extends ViewModelBase{

    public Child:Array<ViewModelBase>;

    constructor(title:string) {
        super(title);

      this.Child = [];
    }
}
