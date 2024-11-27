var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi goes to x:".concat(this.location.x, " from y:").concat(this.location.y));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 5 }, "Red");
taxi_1.travelTo({ x: 1, y: 2 });
// taxi_1.
