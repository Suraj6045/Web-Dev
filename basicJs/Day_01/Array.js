let cricket_team = ["Sachin","Rohit","Virat","Rishabh","M.S. Dhoni","Hardik","Jadeja","Bumrah","Ashwin","Shami","Arshdeep","Chahal"];

//Oh shit! , I added 12 players instead of 11 lets remove chahal from the team no offence btw using pop method
cricket_team.pop();

//Arshdeep is not much experienced ig we should replace him with the Zaheer khan using push and pop
cricket_team.pop();
cricket_team.push("Zaheer")

//ig i forgot to add the og yuvraj singh lets check if he is in team or not using includes
console.log(cricket_team.includes("Yuvraj"));

// yuvraj is not in team so we have to drop rishabh and add him using splice and indexof
cricket_team.splice(cricket_team.indexOf("Rishabh"),1,"Yuvraj");

//Oh we have to give name of cricketer in sorted order, no worry! we have sort method
cricket_team.sort();

//print entire team
cricket_team.forEach(player => console.log(player));

// reduce full cricket team in a string
console.log(cricket_team.reduce((str,x)=> str = str + String(x)+ " "  , ""));

// filter out all cricketer whose name starts with S
console.log(cricket_team.filter(x => x.startsWith("S")));