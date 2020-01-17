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

function CreateObject(name, proto) {
    this.name = name;
    this.__proto__ = proto;
}

let object_a = new CreateObject('Object_a');
object_a.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
};

let object_b = new CreateObject('Object_b', object_a);
object_b.logInfo = function () {
    console.log(`I'm ${this.name}`);
};

let object_c = new CreateObject('Object_c', object_b);
object_c.sayBye = function () {
    console.log(`Bye ${this.name}!`);
};
console.log(object_c);
console.log(object_b);
console.log(object_a);
