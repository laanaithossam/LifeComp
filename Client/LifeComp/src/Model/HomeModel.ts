import {Category} from "../Shared/Model/Interest/Category";
import {EntityBase} from "../Shared/Model/EntityBase";
export class HomeModel extends EntityBase {
  public Title: string;
  public Categories: Array<Category>
}
