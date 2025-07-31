// create a cricketer object with name , role and iscaptain
let dhoni = {
    name : "M.S. dhoni",
    role : "Wicket-Keeper Batsman",
    is_captain : true
}

// access and print the name and role of cricketer
console.log(dhoni.name);
console.log(dhoni.role);

// change role to finisher
dhoni.role = "Finisher";

// remove is_captain property
delete dhoni.is_captain;

// check if dhoni has is_captain property now
console.log("is_captain" in dhoni);

// use for in loop on dhoni
for(prop in dhoni){
    console.log(`${prop} = ${dhoni[prop]}`);
}

// create a copy of dhoni 
let a = dhoni;  // refernce
let b = {...dhoni};  // shallow copy
let c = new Object(dhoni);  // shallow copy 
let dhoni_copy = JSON.parse(JSON.stringify(dhoni));  // deep copy

// add a new property to cricketer
dhoni.is_og = true;
console.log(dhoni);