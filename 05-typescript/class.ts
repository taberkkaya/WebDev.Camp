interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  // ..
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(
      `Taxi goes to x:${this.currentLocation.x} from y:${this.currentLocation.y}`
    );
  }
}

class Bus implements Vehicle {
  // ..
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(
      `Bus goes to x:${this.currentLocation.x} from y:${this.currentLocation.y}`
    );
  }
}
