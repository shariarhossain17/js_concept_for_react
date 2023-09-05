
// array destructuring

const numbers = [50,70];

// const x = numbers[0];
// const y= numbers[1];

// const [x,y] = [50,70];

const [x,y]=numbers;


// console.log(x,y);



//  function destructuring


function makeArray(a,b){

    return [a,b];
}


const [first,second] =makeArray(10,20);

// console.log(first,second);



// object destructuring
// const {name,age}={ name: "john",age:35}
// console.log(name,age);

const programmer ={
    name:"j khan",
    age:35,
    language:["javascript","python","c++"],
    specification:{
        height:18,
        weight:55,
        drink:"coco-cola",
    }
}


// const {age,name}=programmer;
// console.log(age,name);


const {drink}=programmer?.specification;

console.log(drink);
