var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi goes to x:".concat(this.currentLocation.x, " from y:").concat(this.currentLocation.y));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus goes to x:".concat(this.currentLocation.x, " from y:").concat(this.currentLocation.y));
    };
    return Bus;
}());
