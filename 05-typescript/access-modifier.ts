interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(public location: Point, private color?: string) {}
  public travelTo(point: Point): void {
    console.log(`Taxi goes to x:${this.location.x} from y:${this.location.y}`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, "Red");
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.
taxi_1.location;
