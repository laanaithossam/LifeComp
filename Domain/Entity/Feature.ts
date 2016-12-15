import {EntityBase} from "./EntityBase";

export class Feature extends EntityBase {
    Value:any;
    Description: string;
    Features: Array<Feature>;
}