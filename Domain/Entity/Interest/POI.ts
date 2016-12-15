import {EntityBase} from "../EntityBase";
import {Location} from "../Location/Location";
import {Feature} from "../Feature";
import {Activity} from "./Activity";

export class POI extends EntityBase {
    Name: string;
    Features: Array<Feature>;
    Location: Location;
    Popularity: number;
    Activity: Activity;
}