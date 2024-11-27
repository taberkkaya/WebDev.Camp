interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string;
  currentLocation: Point;

  constructor(location: Point, color?: string) {
    this.currentLocation = location;
    typeof color != "undefined" ? (this.color = color) : " ";
  }
  travelTo(point: Point): void {
    console.log(`Taxi goes to x:${point.x} from y:${point.y}`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 }, "Red");
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2: Taxi = new Taxi({ x: 3, y: 51 });
