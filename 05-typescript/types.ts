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

let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3];
let f: Array<number> = [1, 2, 3];
let g: any[] = [1, "a", true];
let h: [string, number, boolean] = ["1", 1, true]; //tuple

const payment1 = 0;
const payment2 = 1;
const payment3 = 2;

// enum Payment {
//   payment1,
//   payment2,
//   payment3,
// }

enum Payment {
  payment1 = 0,
  payment2 = 1,
  payment3 = 2,
}

let p1 = Payment.payment1;
let p2 = Payment.payment2;
let p3 = Payment.payment3;
