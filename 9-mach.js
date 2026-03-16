let time=2;
if(time>=0 && time<12){
    console.log("It's Morning !!");
}
else if(time >=12 && time<15){
    console.log("It's noon !!");
}
else if(time >=15 && time <19){
    console.log("It's evening !!");
}
else if(time >19 && time<0){
    console.log("It's Night !!");
}
else{
    console.log("Not a valid number.")
}

let year=3;
switch(year){
    case 1: console.log("You are in 1st Year.");break;
    case 2: console.log("You are in 2nd Year.");break;
    case 3: console.log("You are in 3rd Year.");break;
    case 4: console.log("You are in 4th Year.");break;
    default : console.log("Not a valid option.");
}

let a={"adam","eve","dark"};
a.push("drone");
console.log(a)