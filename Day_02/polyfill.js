let arr = [1,2,3,5];
let new_arr = arr.map((x) => x*3);    // booooooooooooooring
console.log(new_arr);

// lets create our own map method

// this map func is also written by someone who made the browser, each browser have different types of map function but there output is
// same as per the standard rules.

// sometimes some browser doesnt support a func at that time developers write their own implementation for the function, this is 
// called polyfill, we do this in order to avoid crashes

if(!Array.prototype.myMap){    // dont use arrow func for polyfilling , arrow functions dont have "this" keyword 
    Array.prototype.myMap = function(func) {
        let new_arr = [...this];
        for(let i=0 ; i<this.length ; i++){
            new_arr[i] = func(this[i]);
        }
        return new_arr;
    } 
}

let new_arr_1 = arr.myMap((x) => x*3);
console.log(new_arr_1);

