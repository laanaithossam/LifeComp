import {Category} from "../../Domain/Entity/Interest/Category";
export class FakeCategory {

    public static Categories: Array<Category> = [
        {Id: 0, Description: 'Desc1', Value: 'Val1', Features: []},
        {Id: 1, Description: 'Desc2', Value: 'Val2', Features: []},
        {Id: 2, Description: 'Desc3', Value: 'Val3', Features: []}
    ];
}