'use strict';
class Hamburger {
    //SIZE
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };
    static SIZE_BIG = {
        price: 100,
        calories: 40
    };

    //STUFFING
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }
    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }
    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }

    //TOPPING
    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    }
    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    }

    addTopping(topping) {
        this.price = this.price + topping.price;
        this.calories = this.calories + topping.calories;
    }
    calculateCalories () {
        return this.calories;
    }
    calculatePrice() {
        return this.price;
    }
    constructor(size, stuffing) {
        this.price = size.price + stuffing.price;
        this.calories = size.calories + stuffing.calories;
    }

}

let hamburger = new Hamburger (Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.group('маленький гамбургер с начинкой из сыра:')
console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice());
console.groupEnd();

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.group('добавка из майонеза:')
console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice());
console.groupEnd();

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.group('посыпать приправой:')
console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice());
console.groupEnd();
