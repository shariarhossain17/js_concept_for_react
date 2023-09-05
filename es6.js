const numbersArray = [89,35,70,10];

const person = {

    name:"john",
    age:37,
    movies:["dhakar-mastar","gulistaner king khan"]
    
}


// template string


const about=`my name is ${person.name} age of ${person.age} has number ${numbersArray[2]}`

// console.log(about);


// arrow function 

//  without parameter

const getNumber = () => 55;


// console.log(getNumber());


// with parameter
const getNumber2= (num) => num;
const isEven = x => x%2===0;
// console.log(isEven(4));
// console.log(getNumber2(20));


//  multiple parameter
const getSum =(a,b,c)=> a+b+c;


// console.log(getSum(10,15,5));


//  multiline arrow function

const getMultiply = (num1,num2) => {
    const result = num1*num2;
    return result;
}



// spread operator
const currentNumbers=[...numbersArray,10000];

const newNumbers=[...numbersArray];
numbersArray.push(100)



console.log(currentNumbers);


