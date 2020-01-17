'use strict';
//1.Реализовать цепочку протитопов с помощью Object.create.
let objA = {
    name: 'Obj A',
    logInfo: function () {
        console.log(`I'm ${this.name}`);
    },
};

let objB = Object.create(objA);

objB.name = 'Obj B';
objB.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
};

let objC = Object.create(objB);
objC.name = 'Obj C';
objC.sayBye = function () {
    console.log(`Bye ${this.name}!`);
};

console.log(objC);
console.log(objB);
console.log(objA);

console.log('============================================');

//2. Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf)
let objectA = {
    name: 'Object A',
    greet: function () {
        console.log(`Hi, I'm ${this.name}`);
    }
};
let objectB = {
    name: 'Object B',
    logInfo: function () {
        console.log(`I'm ${this.name}`);
    },
};
let objectC = {
    name: 'Object C',
    sayBye: function () {
        console.log(`Bye ${this.name}!`);
    },
};
objectB.__proto__ = objectA;
Object.setPrototypeOf(objectC, objectB);
console.log(objectC);
console.log(objectB);
console.log(objectA);

console.log('============================================');

//3.Реализовать цепочку протитопов с помощью функций конструкторов

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getInfo = function () {
    console.log(`Name: ${this.name}, age: ${this.age}`);
}

function Footballer(name, age, number) {
    Person.apply(this, arguments);
    // this.position = position;
    this.number = number;
}
Footballer.prototype = Object.create(Person.prototype);
Footballer.prototype.constructor = Footballer;
Footballer.prototype.getFootballerInfo = function () {
    console.group(`Footballer: ${this.name}`)
    console.log(`Age: ${this.age}`);
    console.log(`Number: ${this.number}`);
    console.groupEnd();
}

function FootballerPosition(name, age, number, position) {
    Footballer.apply(this, arguments);
    this.position = position;
}
FootballerPosition.prototype = Object.create(Footballer.prototype);
FootballerPosition.prototype.constructor = FootballerPosition;
FootballerPosition.prototype.getFootballerPositionInfo = function () {
    console.log(`Position of ${this.name}: ${this.position}`);
}

let defender = new FootballerPosition('Virgil van Dijk', 29, 4, 'Defender');
console.log(defender);
defender.getFootballerInfo();
defender.getFootballerPositionInfo();
