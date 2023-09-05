
// falsy  "",0,false,undefined,null

// truthy "12",1-,true,{},[]


const myVar=110;



// check truthy
if(myVar){

    console.log(myVar);
}


// check falsy and negative

if(!myVar){

    console.log(myVar);
}



// ternary operator


const money=110;

let food;

if(money > 100){
    food="biriyani"
}
else{
    food="cha"
}


let food1=money>100?"ami biriyani khabo":"ami gorib";

console.log(food1);

let food2=money>100 && myVar > 100?"ami biriyani khabo sathe coke o nebo":"ami gorib";

console.log(food2);


// convert to string;


// const num1=40;

// console.log(typeof num1);

// const numStr=num1+"";
// console.log(typeof numStr);



// convert string to number
const num1="40";

console.log(typeof num1);

const numInt= +num1;
console.log(typeof numInt);



//  extra

let isActive=false;

const showUser=()=> console.log("show user");
const hideUser=()=> console.log("hideUser");

isActive?showUser():hideUser();



// left side zodi sotti hoy right side will be execute
isActive&&showUser();


// toggle

isActive = !isActive;
