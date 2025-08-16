Function.prototype.describe = function(){
    console.log(this.name);   // here this.name refers to name of function
}
function hi(){}
hi.describe();


function createCounter(){    // through this technique we can acess count(outside the function) that has a local scope
    let count = 0;
    return function () {    // we can return a function too in js
        count++;
        return count
    }
}
const counter = createCounter()
console.log(counter());


(function(){    // Immediately Invoked Function Expression (IIFE) 
    console.log("hitesh");  // this function doesnt have a name and is called automatically
    
})()


