//----------------------------------------------------1

// Do Not Edit
type numandstring = number | string;

abstract class Game {
  constructor(public title: string, public price: numandstring) {}
  abstract getLocation(): string;
  abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game {
  constructor(title: string, price: numandstring, public rate: number) {
    super(title, price);
  }
  getDiscount(): string {
    return `Discount`;
  }
  getLocation(): string {
    return `Location`;
  }
}

class Action extends Game {
  constructor(
    title: string,
    price: numandstring,
    public rate: number,
    public company: string
  ) {
    super(title, price);
  }
  getDiscount(): string {
    return `Discount`;
  }
  getLocation(): string {
    return `Location`;
  }
}
// End Edit And Fix

// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"

console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"

//----------------------------------------------------2

// Write Function Code Here
function showTypes<A = string, B = string, C = string>(
  one?: A,
  two?: B,
  three?: C
): string {
  return `${one ? one : "Nothing"} - ${two ? two : "Nothing"} - ${
    three ? three : "Nothing"
  }`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

//----------------------------------------------------3

// Write Class Code Here
class Game2<T> {
  constructor(public title: T, public price: number = 100) {}
  getDiscount(arg: T): void {
    console.log(`The Discount Is ${arg}`);
  }
}

// Do Not Edit Here
let gameOne2 = new Game2<string>("Ys", 100);
let gameTwo2 = new Game2<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne2.title); // "Ys"
console.log(gameOne2.price); // 100
gameOne2.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo2.title); // 2064
console.log(gameTwo2.price); // 100
gameTwo2.getDiscount(80); // "The Discount Is 80"
