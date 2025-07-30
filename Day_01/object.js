let a = {
    name : "suraj",
    age : 19,
    skills : {
        lang : ["python" , "c++" , "js" , "java"],
        frameworks : ["numpy" , "pandas"]
    }
}

let b = a;  // shallow copy -> changes in b will reflect on a

let c = {
    name : a.name,  // deep copy but for skills its still a shallow copy and we cant do this every property
    age : a.age,
    skills : a.skills
}

let str = JSON.stringify(a);
let d = JSON.parse(str);  // deep copy -> its called the method of serielizing and de-seriealizing
a.skills.lang[1] = "c";
console.log(a.skills.lang);
console.log(d.skills.lang);