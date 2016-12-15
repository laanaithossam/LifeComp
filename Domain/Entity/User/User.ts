import {Feature} from "../Feature";
import {EntityBase} from "../EntityBase";

export class User extends EntityBase {
    FirstName:string;
    LastName:string;
    Email:string;
    Features:Array<Feature>
}