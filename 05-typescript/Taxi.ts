import { Vehicle } from "./Vehicle";
export class Taxi implements Vehicle {
  constructor(private _location: Point, private _color?: string) {}
  public travelTo(point: Point): void {
    console.log(
      `Taxi goes to x:${this._location.x} from y:${this._location.y}`
    );
  }

  getLocation() {
    return this._location;
  }

  setLocation(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Must be possitive");
    } else {
      this._location = value;
    }
  }

  get location() {
    return this._location;
  }

  set location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Must be possitive");
    } else {
      this._location = value;
    }
  }
}
