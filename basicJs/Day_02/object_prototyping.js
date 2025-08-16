Object.prototype.chai = "hi";   // made a new property named chai for all objects

let arr = [1,2,3]
console.log(typeof(arr));   // In js everything is an object thats why object prototyped property works on anything

String.prototype.coffee = "hello";
console.log(arr.coffee);   // dont work cuz we made this prototype only for string but if we make a object prototype then it works for all datatypes
let str = "suraj";
console.log(str.coffee);

let a = {
    name : "a",
    age : "i am a i have no age"
}
console.log(arr.chai);
console.log(a.age.chai);  // even object properties have this property chai now , isn't it interesting?
