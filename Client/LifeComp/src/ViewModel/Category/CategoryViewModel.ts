import {NavigationService} from '../../Service/Navigation/NavigationService';
import {NavigationViewModelBase} from '../../Framework/ViewModel/NavigationViewModelBase';
export abstract class CategoryViewModel extends NavigationViewModelBase{
    constructor(){
        super('Category details');
    }

}