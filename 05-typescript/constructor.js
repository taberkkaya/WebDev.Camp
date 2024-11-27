var Taxi = /** @class */ (function () {
    function Taxi(location) {
        this.currentLocation = location;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi goes to x:".concat(point.x, " from y:").concat(point.y));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
