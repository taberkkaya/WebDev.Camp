var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi goes to x:".concat(point.x, " from y:").concat(point.y));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus goes to x:".concat(point.x, " from y:").concat(point.y));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi();
taxi_2.travelTo({ x: 8, y: 5 });
taxi_2.currentLocation = { x: 10, y: 51 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
var bus = new Bus();
bus.travelTo({ x: 8, y: 5 });
bus.currentLocation = { x: 10, y: 51 };
console.log(bus.currentLocation.x);
console.log(bus.currentLocation.y);
