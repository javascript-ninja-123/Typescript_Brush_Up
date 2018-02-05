"use strict";
console.log('yes');
var myRealAage = 26;
///array
var hobbies = [100, 200, 300];
var mapArray = function (array) {
    return array.map(function (value) { return value * 2; });
};
//order is important tuples
var address = ['SuperCast', 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 2] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 104] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor);
var Man;
(function (Man) {
    Man[Man["first"] = 0] = "first";
    Man[Man["second"] = 1] = "second";
})(Man || (Man = {}));
var myMan = Man.first;
console.log(myMan);
//any
var car = 'BMW';
console.log(car);
car = {
    brand: 'yes',
    series: 404
};
console.log(car);
//functions
function myName() {
    return 'yes';
}
var myName2 = function () {
    return ',an';
};
var voidFunction = function () {
    console.log('I am not returning anything');
};
//argument types
var multiply = function (val1, val2) {
    return val1 * val2;
};
console.log(myName());
console.log(multiply(1, 2));
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(11, 12));
//Object
var userData = {
    name: 'Max',
    age: 27
};
var complex = {
    data: [100, 99, 100, 11],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [111, 23],
    output: function (all) {
        return this.data;
    }
};
////union types
var unionType = '222';
unionType = 22;
if (typeof unionType === 'number')
    console.log('yes');
//never types
function neverReturn() {
    throw new Error('an Error');
}
var canAlsoBeNull = 6;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 'yes';
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "max",
    bankAccount: bankAccount,
    hobbies: ['Coding,Sex']
};
myself.bankAccount.deposit(1000);
console.log(myself);
function controlMe(isTrue) {
    var result;
    if (isTrue) {
        result = 12;
        return result;
    }
    return 23;
}
var variable = 'Test';
console.log(variable);
//Block scope
function reset() {
    var varaible = null;
    console.log(varaible);
}
reset();
console.log(variable);
//arrow functions
var addNumbers = function (num1) {
    if (num1 === void 0) { num1 = 10; }
    return num1 * 10;
};
console.log(addNumbers());
