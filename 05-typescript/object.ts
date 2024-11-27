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
    console.log(`Taxi goes to x:${point.x} from y:${point.y}`);
  }
}

class Bus implements Vehicle {
  // ..
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`Bus goes to x:${point.x} from y:${point.y}`);
  }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

let taxi_2: Taxi = new Taxi();
taxi_2.travelTo({ x: 8, y: 5 });
taxi_2.currentLocation = { x: 10, y: 51 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);

let bus: Bus = new Bus();
bus.travelTo({ x: 8, y: 5 });
bus.currentLocation = { x: 10, y: 51 };
console.log(bus.currentLocation.x);
console.log(bus.currentLocation.y);
