"use strict";
//-----------------------------------------1
// Do Not Edit The Code Below
let user = {
    // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        // 'getName' does not exist in type 'Member'
        return this.username;
    },
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    },
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton",
};
//-----------------------------------------4
// Create Class Here
class Player {
    constructor(username, gameType, level, vip) {
        this.username = username;
        this.gameType = gameType;
        this.level = level;
        this.vip = vip;
    }
    details() {
        return `${this.vip ? "VIP" : ""} ${this.username}, Type Is ${this.gameType} Level Is ${this.level}`.trim();
    }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
//-----------------------------------------5
// before shortening the code    <=====
// class Shorten {
//   public id: number;
//   public username: string;
//   protected title: string;
//   constructor(id: number, username: string, title: string) {
//     this.id = id;
//     this.username = username;
//     this.title = title;
//   }
// }
// after shortening the code    <=====
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester = new Shorten(100, "Elzero", "Developer");
console.log(tester.id);
console.log(tester.username);
//-----------------------------------------6
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
let tester2 = new Show("Elzero");
console.log(tester2.title); // Property 'title' does not exist on type 'Show'
tester2.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester2.title); // Property 'title' does not exist on type 'Show'
// Create Your Class Here
// class Player2 implements Play {
//   id: number;
//   title: string;
//   level: number;
//   constructor(id: number, title: string, level: number) {
//     this.id = id;
//     this.title = title;
//     this.level = level;
//   }
//   logIn(): void {
//     console.log("Logged In");
//   }
//   logOut(msg: string): void {
//     console.log(`Logged Out, ${msg}`);
//   }
// }
// short solution
class Player2 {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log("Logged In");
    }
    logOut(msg) {
        console.log(`Logged Out, ${msg}`);
    }
}
let player5 = new Player2(100, "Elzero", 95);
console.log(player5.id); // 100
console.log(player5.title); // "Elzero"
console.log(player5.level); // 95
player5.logIn(); // Logged In
player5.logOut("Good Bye"); // Logged Out, Good Bye
