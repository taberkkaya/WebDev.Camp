// let number = 4;
// number = "a";
// tsc types.ts
// types.ts:2:1 - error TS2322: Type 'string' is not assignable to type 'number'.
// 2 number = "a";
//   ~~~~~~
// Found 1 error in types.ts:2
// let a;
// a = 5;
// a = 'a';
// a = true;
var a = 5;
var b = "a";
var c = true;
var d;
var e = [1, 2, 3];
var f = [1, 2, 3];
var g = [1, "a", true];
var h = ["1", 1, true]; //tuple
var payment1 = 0;
var payment2 = 1;
var payment3 = 2;
// enum Payment {
//   payment1,
//   payment2,
//   payment3,
// }
var Payment;
(function (Payment) {
    Payment[Payment["payment1"] = 0] = "payment1";
    Payment[Payment["payment2"] = 1] = "payment2";
    Payment[Payment["payment3"] = 2] = "payment3";
})(Payment || (Payment = {}));
var p1 = Payment.payment1;
var p2 = Payment.payment2;
var p3 = Payment.payment3;
