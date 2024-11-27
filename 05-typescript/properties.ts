interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
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

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, "Red");
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.
// taxi_1.location;

taxi_1.getLocation();
taxi_1.setLocation({ x: 2, y: 5 });

taxi_1.location;
taxi_1.location = { x: 2, y: 5 };
