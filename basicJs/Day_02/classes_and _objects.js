let a = {
    name : "suraj",
    age : 19,
    func : function(){
        console.log("hi");
    }
}

let b = {
    name : "swag",   // b dont have func method
    age : 18
}

b.__proto__ = a;   // we changed the proto file of b to object a, but still proto methods are available inside b because
console.log(b.toString());  // for any method it first check b => b.proto => b.proto.proto => and so on

b.func();

 

// Classes in js
class Parent {
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }

    fullname(){
        console.log(`${this.fname} ${this.lname}`);
    }
}

class child extends Parent {  // what it actually do => child.prototype = Parent.prototype
    name;
}



let p1 = new Parent("S" , "M");   // what is actually do is => p1.__proto__  = Parent.prototype
// (means we can access properties and methods of Parent class too) 
//  in classes we use .prototype instead of __proto__


let c1 = new child("s","m");
c1.fullname()

